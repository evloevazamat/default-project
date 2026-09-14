import { Send, MessageCircle } from 'lucide-react'
import { CONTACTS } from '../config'

export default function MobileBar() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-bone/10 bg-coal/95 backdrop-blur">
      <div className="flex">
        <a
          href={CONTACTS.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm text-bone active:bg-sand/10"
        >
          <Send size={15} className="text-sand" />
          Telegram
        </a>
        <span className="w-px bg-bone/10" aria-hidden="true" />
        <a
          href={CONTACTS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm text-bone active:bg-sand/10"
        >
          <MessageCircle size={15} className="text-sand" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}