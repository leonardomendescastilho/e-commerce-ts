import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Check } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-slate-50'>
      <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 lg-pb-52 lg:gap-x-0 lg:pt-24 sm:pb-32  xl:gap-x-8 '>
        <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
          <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
            <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
              <img
                className='w-full'
                src='/snake-1.png'
              />
            </div>
            <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
              Sua imagem{' '}
              <span className='bg-green-600 px-2 text-white'>
                personalizada
              </span>
              , na capinha do celular
            </h1>
            <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
              capture suas memórias favoritas com sua própria capa de telefone{' '}
              <span className='font-semibold'>exclusiva</span>. CaseCobra
              permite que você proteja suas memórias, não apenas a capa do seu
              telefone.
            </p>
            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center md:items-start'>
              <div className='space-y-2'>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='size-5 text-green-600 shrink-0'/>
                  Alta qualidade, material durável
                </li>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='size-5 text-green-600 shrink-0'/>
                  Garantia de 5 anos de impressão
                </li>
                <li className='flex gap-1.5 items-center text-left'>
                  <Check className='size-5 text-green-600 shrink-0'/>
                  Suporta modelo moderno de Iphone
                </li>
              </div>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
