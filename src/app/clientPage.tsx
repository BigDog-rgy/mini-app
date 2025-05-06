"use client";

import { useEffect } from 'react';
import { sdk } from '@farcaster/frame-sdk';

export default function Page() {
    useEffect(() => {
      const initialize = async () => {
        await sdk.actions.ready();
      };
      initialize();
    }, []);
    return (
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1>👋 Welcome to MiniPoll</h1>
        <p>Try this Farcaster-native poll embedded right into Warpcast.</p>
        <p>Click the button below to get started.</p>
        <a
          href="/frames"
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            marginTop: "1rem",
            display: "inline-block",
          }}
        >
          🚀 Launch Frame
        </a>
      </main>
    );
  }
  