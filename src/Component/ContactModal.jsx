import { MdOutlinePhone, MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { LuMailCheck } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  
  const contactData = {
    title: "Get in Touch Now!",
    description: "I'm open to new projects and freelance opportunities! Whether you need a UI designer or front-end developer, let's collaborate and bring your ideas to life. Reach out today!",
    contactItems: [
      {
        type: "phone",
        label: "Phone Number",
        value: "+917559068970",
        buttonText: "Call Now"
      },
      {
        type: "email",
        label: "Email Address",
        value: "aswanthup06@gmail.com",
        buttonText: "Email Now"
      },
      {
        type: "whatsapp",
        label: "Whatsapp",
        value: "917559068970",
        buttonText: "Chat Now"
      }
    ]
  };

  const handleContactAction = async (type, value) => {
    try {
      switch (type) {
        case 'phone':
          window.location.href = `tel:${value}`;
          break;
          
        case 'email':
          // Try to open email client first
          const subject = encodeURIComponent("Let's work together!");
          const body = encodeURIComponent("Hi Aswanth,\n\nI came across your portfolio and would like to discuss...");
          const mailtoLink = `mailto:${value}?subject=${subject}&body=${body}`;
          
          // Create a hidden anchor tag to trigger the mailto
          const mailAnchor = document.createElement('a');
          mailAnchor.href = mailtoLink;
          mailAnchor.target = '_blank';
          mailAnchor.rel = 'noopener noreferrer';
          document.body.appendChild(mailAnchor);
          mailAnchor.click();
          document.body.removeChild(mailAnchor);
          
          // Fallback if mailto doesn't work
          setTimeout(() => {
            if (!document.hidden) {
              copyToClipboard(value);
            }
          }, 1000);
          break;
          
        case 'whatsapp':
          window.open(`https://wa.me/${value}`, '_blank');
          break;
          
        default:
          break;
      }
    } catch (error) {
      console.error('Error handling contact action:', error);
      if (type === 'email') {
        copyToClipboard(value);
      }
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'phone': return <MdOutlinePhone className="w-5 h-5" />;
      case 'email': return <LuMailCheck className="w-5 h-5" />;
      case 'whatsapp': return <BsWhatsapp className="w-5 h-5" />;
      default: return <MdOutlinePhone className="w-5 h-5" />;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black backdrop-blur-sm bg-opacity-30"
        onClick={onClose}
      />
      
      <div className="relative rounded-3xl w-full max-w-[550px] mx-auto overflow-hidden bg-indigo-600 border border-white/20">
        <button
          className="absolute top-3 right-3 text-indigo-900 hover:text-red-900 h-8 w-8 rounded-full backdrop-blur-lg bg-indigo-500/70 flex items-center justify-center z-10"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="p-6">
          <h2 className="text-xl font-bold text-white/80">
            {contactData.title} 🎉
          </h2>
          <p className="mt-2 text-white/60 text-sm font-light mb-12">
            {contactData.description}
          </p>

          {contactData.contactItems.map((item, index) => (
            <div key={index} className={`flex items-center gap-10 justify-between ${index < contactData.contactItems.length - 1 ? 'pb-6 mb-6' : ''}`}>
              <div className="flex gap-4 items-center">
                <div className="h-14 w-14 text-white/70 rounded-full bg-indigo-800 flex items-center justify-center">
                  {getIcon(item.type)}
                </div>
                <div>
                  <h1 className="text-sm text-white">{item.label}</h1>
                  <h1 className="text-lg font-thin text-white font-sora">{item.value}</h1>
                </div>
              </div>
              <button 
                className={`bg-white/80 text-sm font-semibold h-9 text-slate-800 w-28 rounded-full whitespace-nowrap hover:bg-white transition-colors ${
                  copiedEmail && item.type === 'email' ? 'bg-green-100 text-green-800' : ''
                }`}
                onClick={() => handleContactAction(item.type, item.value)}
              >
                {copiedEmail && item.type === 'email' ? 'Copied!' : item.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;