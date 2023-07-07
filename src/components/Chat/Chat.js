import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateChatInputMessage, updateChatInputUsername, setContent } from '../../actions';

const Chat = () => {
  const chatInputMessage = useSelector((state) => state.chat.chatInputMessage); // Access inputMessage from chat state
  const chatInputUsername = useSelector((state) => state.chat.chatInputUsername); // Access inputMessage from chat state
  const dispatch = useDispatch();

  const webhookURL = 'https://ptb.discord.com/api/webhooks/1126834465906360340/qaTTolxRC5pr8mzSaDrdKiByzvBkspBtuZzy1lOuYynfqJpxpQqFqX7I1i2JGWGFg5zB';

  const handleMessageSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      content: chatInputMessage,
      username: chatInputUsername, // Change this to your desired sender name
      avatar_url: 'https://cdn.discordapp.com/emojis/855002873120948225.webp?size=96&quality=lossless', // Optionally, provide an image URL for the sender avatar
      embeds: [
        {
          title: 'Embedded Content',
          description: 'This is an embedded message.',
          color: 16711680, // Hexadecimal color value (e.g., red: 16711680, blue: 255, green: 65280)
          fields: [
            {
              name: 'Field 1',
              value: 'Value 1',
            },
            {
              name: 'Field 2',
              value: 'Value 2',
            },
          ],
          // Additional embed properties can be added
        },
      ],
    };

    try {
      await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      dispatch(updateChatInputMessage(''));
      dispatch(updateChatInputUsername(''));

      // You can optionally dispatch your setContent action here to handle content updates
      // dispatch(setContent(payload.content));
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div>
        <h2>Chat</h2>
        {/* ... */}
      </div>

      <form onSubmit={handleMessageSubmit}>
      <input
          type="text"
          placeholder="How shall we call you?"
          value={chatInputUsername}
          onChange={(e) => dispatch(updateChatInputUsername(e.target.value))}
        />
        <input
          type="text"
          placeholder="Enter your message"
          value={chatInputMessage}
          onChange={(e) => dispatch(updateChatInputMessage(e.target.value))}
        />
        {/* ... */}
        <input type={'submit'} placeholder="submit"></input>
      </form>
    </div>
  );
};

export default Chat;
