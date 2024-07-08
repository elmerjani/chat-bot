'use client';
import { useChat } from 'ai/react';
import Image from "next/image";
import { Textarea } from '@/components/ui/textarea';
import {Button} from '@/components/ui/Button';
import { Send } from 'lucide-react';

export default function Home() {
  const { messages, handleSubmit, input, handleInputChange } = useChat();

  return (
    <main className='fixed h-full w-full bg-muted'>
      <div className='container h-full w-full flex flex-col py-8'>
        <div className='flex-1 overflow-y-auto'>
          {messages.map((message, index) => (
            <div key={index} className='flex items-start mb-4'>
              <div className='w-8 h-8 bg-primary rounded-full mr-4'></div>
              <div className='bg-white p-4 rounded-lg'>
                <p className='text-lg'>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form className='mt-auto relative' onSubmit={handleSubmit}>
          <Textarea
            className='w-full text-lg'
            placeholder='Message e-ESJ bot'
            value={input}
            onChange={handleInputChange}
          />
          <Button
            type='submit'
            size='icon'
            disabled={!input}
            className='absolute top-1/2 transform -translate-y-1/2 right-4 rounded-full'
          >
            <Send size={24} />
          </Button>
        </form>
      </div>
    </main>
  );
}
