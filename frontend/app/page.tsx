"use client"

import FormComponent from '@/app/components/FormComponent';
import Modal from '@/app/components/Modal';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { Suspense } from 'react'

export default function Home() {
  const base_route = "https://containerwordsearch.pythonanywhere.com" // "http://127.0.0.1:5000";
  const base_route_http = "http://containerwordsearch.pythonanywhere.com"
  const router = useRouter();
  const [prompt, setPrompt] = useState<string | null>(null);
  const [words, setWords] = useState<string[]>([]);
  const [definition, setDefinition] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  
  const fetchWords = async (prompt: string) => {
    try {
      const response = await fetch(`${base_route}/api/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt }),
      });

      if (!response.ok) {
        throw new Error('Network response failed.');
      }
      const data = await response.json();
      setWords(data);
    } catch (error) {
      console.error('Error fetching words:', error);
      setError(`There was a problem with the fetch operation: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchDefinition = async (word: string) => {
    setDefinition(null)
    setShowModal(true);
    try {
      const response = await fetch(`${base_route_http}/api/definition?word=${word.toLowerCase()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      let definition = data['definition'];
      if (definition) {
        setDefinition([word, definition]);
      } else {
        setDefinition([word, 'Definition not found.']);
      }
    } catch (error) {
      console.error('Error fetching definition:', error);
      setDefinition([word, 'Error fetching definition.']);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Fetch initial prompt value from URL and fetch words
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialPrompt = params.get('prompt');
    if (initialPrompt) {
      setPrompt(initialPrompt);
      setTitle(prompt);
    }
  }, []);

  // Effect to fetch words whenever prompt changes
  useEffect(() => {
    if (prompt) {
      setTitle(prompt)
      fetchWords(prompt as string);
    } else {
      setLoading(false);
      return;
    }
  }, [prompt]);

  const setTitle = (prompt: string | null) => {
    document.title = "Container Word Search"
    if (prompt) {
      document.title += ` - ${prompt}`
    }
  }

  const handleFormSubmit = (newPrompt: string) => {
    setLoading(true);
    setError(null);
    setWords([]);
    closeModal();
    router.push(`/?prompt=${newPrompt}`);
  };

  const scroll = () => {
    window.scroll({
      top: scrolled ? 0 : document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
    setScrolled(!scrolled);
  };

  const goHome = () => {
    setError(null);
    setPrompt(null);
    setWords([]);
    closeModal();
    setTitle(null)
    router.push('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <button onClick={goHome}><h1 style={{ marginBottom: '20px', fontSize: '30px' }}>Container Word Search</h1></button>
        <Suspense>
          <FormComponent onSubmit={handleFormSubmit} />
        </Suspense>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && (
          <div>
            {prompt && <h2 style={{ marginTop: '20px' }}>Words {prompt ? 'containing' : ''} {prompt} ({words.length} found){words.length > 0 ? ':' : ''}</h2>}
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              {words.map((word, index) => (
                <li key={index} style={{ marginBottom: '5px', backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '4px' }}>
                  <button onClick={() => fetchDefinition(word)}>{word.toLowerCase()}</button>
                </li>
              ))}
            </ul>
        </div>
        )}
        <Modal 
          show={showModal} 
          onClose={closeModal} 
          content={definition || ['', 'Loading...']} 
        />
        {/* Scroll to bottom/top button */}
        <button onClick={scroll} style={{ position: 'fixed', bottom: '20px', left: '50%', background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <Image src={scrolled ? '/up.svg' : '/down.svg'} alt="" width={24} height={24} />
        </button>
      </div>
    </main>
  );
}
