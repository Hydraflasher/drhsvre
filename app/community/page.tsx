import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Twitter, Github } from 'lucide-react';

export default function Community() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Community</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Join the Trust Wallet community to connect with other users, share experiences, and stay updated.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <Users className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Discussion Forums</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Engage with other Trust Wallet users, share tips, and get help from the community.
            </p>
            <Button className="bg-[#3375BB] hover:bg-[#0B65C6] w-full">Join Forum</Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <MessageSquare className="h-8 w-8 text-[#3375BB] mb-4" />
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Live Chat</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Connect with community moderators and other users in real-time.
            </p>
            <Button className="bg-[#3375BB] hover:bg-[#0B65C6] w-full">Start Chatting</Button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Social Media</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="https://twitter.com/trustwallet" target="_blank" rel="noopener noreferrer" 
              className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <Twitter className="h-6 w-6 text-[#3375BB]" />
              <span className="text-gray-900 dark:text-white">Twitter</span>
            </a>
            <a href="https://t.me/trust_announcements" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <MessageSquare className="h-6 w-6 text-[#3375BB]" />
              <span className="text-gray-900 dark:text-white">Telegram</span>
            </a>
            <a href="https://github.com/trustwallet" target="_blank" rel="noopener noreferrer"
              className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <Github className="h-6 w-6 text-[#3375BB]" />
              <span className="text-gray-900 dark:text-white">GitHub</span>
            </a>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Community Guidelines</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>• Be respectful and helpful to other community members</p>
            <p>• Don't share sensitive information or recovery phrases</p>
            <p>• Report suspicious activity to moderators</p>
            <p>• Follow our code of conduct</p>
          </div>
          <Button variant="outline" className="mt-6">Read Full Guidelines</Button>
        </div>
      </div>
    </div>
  );
}