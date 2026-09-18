'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const BOOT_SEQUENCE = [
  { text: 'initializing linha_zero...', delay: 400 },
  { text: 'loading knowledge_base...', delay: 600 },
  { text: 'checking system_dependencies...', delay: 500 },
  { text: 'status: ready', delay: 300 },
  { text: 'user: visitante', delay: 300 },
  { text: 'next_step: aprender', delay: 400 },
  { text: '>', delay: 0 },
];

export const Terminal = ({ className }: { className?: string }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < BOOT_SEQUENCE.length) {
      const line = BOOT_SEQUENCE[currentLineIndex];

      if (currentCharIndex < line.text.length) {
        const timer = setTimeout(() => {
          setLines(prev => {
            const lastLine = prev[prev.length - 1];
            if (lastLine === undefined || prev.length < currentLineIndex + 1) {
              return [...prev, line.text.slice(0, currentCharIndex + 1)];
            }
            const newLines = [...prev];
            newLines[currentLineIndex] = line.text.slice(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, line.delay);
        return () => clearTimeout(timer);
      }
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className={cn(
      'w-full max-w-2xl bg-dark-900 border border-border rounded-lg overflow-hidden shadow-2xl font-mono text-sm',
      className
    )}>
      {/* Terminal Header */}
      <div className="bg-dark-800 px-4 py-2 border-b border-border flex items-center justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <span className="text-muted text-[10px] uppercase tracking-widest">bash — linha-zero — 80x24</span>
        <div className="w-10" />
      </div>

      {/* Terminal Body */}
      <div className="p-4 h-64 overflow-y-auto scrollbar-hide">
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2 mb-1">
            <span className="text-brand-blue opacity-70">➜</span>
            <span className="text-foreground">{line}</span>
          </div>
        ))}
        {currentLineIndex < BOOT_SEQUENCE.length && (
          <div className="flex gap-2">
            <span className="text-brand-blue opacity-70">➜</span>
            <span className="w-2 h-5 bg-brand-blue animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
};
