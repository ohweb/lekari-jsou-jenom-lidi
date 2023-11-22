'use client'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import Markdown from 'markdown-to-jsx'

export interface LegalFaqProps {
  question: string
  answer: string
}
const LegalFaq = ({ question, answer }: LegalFaqProps) => {
  return (
    <Disclosure as="div" className="pt-6">
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
              <span className="mb-6 text-xl font-bold leading-7 tracking-tight">
                {question}
              </span>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Disclosure.Panel as="dd" className="mt-2 pr-12">
            <div>
              <Markdown className="prose text-justify text-base leading-7 text-gray-600 lg:prose-xl">
                {answer}
              </Markdown>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default LegalFaq
