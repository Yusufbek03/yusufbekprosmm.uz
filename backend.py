import requests
import json
from datetime import datetime


class TelegramBot:
    def __init__(self, token, chat_id):
        self.token = token
        self.chat_id = chat_id
        self.base_url = f"https://api.telegram.org/bot{token}"

    def send_message(self, message, parse_mode='HTML'):
        """Send a message to the specified chat"""
        url = f"{self.base_url}/sendMessage"
        data = {
            'chat_id': self.chat_id,
            'text': message,
            'parse_mode': parse_mode
        }

        try:
            response = requests.post(url, json=data)
            return response.json()
        except Exception as e:
            print(f"Error sending message: {e}")
            return None

    def send_order_notification(self, order_data):
        """Send formatted order notification"""
        message = f"""
🎯 <b>New Order Received!</b>

👤 <b>Client:</b> {order_data['name']}
📱 <b>Contact:</b> {order_data['contact']}
🎨 <b>Service:</b> {order_data['service']}
💰 <b>Budget:</b> {order_data['budget']}
⏰ <b>Duration:</b> {order_data.get('duration', 'Not specified')}

📝 <b>Project Details:</b>
{order_data['details']}

🕒 <b>Time:</b> {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

📊 <b>Order ID:</b> #{hash(str(order_data)) % 10000}
        """

        return self.send_message(message)


# Configuration
TELEGRAM_BOT_TOKEN = '8254692752:AAGxX68rvtollbo_aqeip2EThnaAqSGI6Go'
TELEGRAM_CHAT_ID = '8107614946'

# Initialize bot
bot = TelegramBot(TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)

# Example usage (this would be called from your web frontend)
if __name__ == "__main__":
    # Test message
    test_order = {
        'name': 'Test Client',
        'contact': '@testuser',
        'service': 'SMM Management',
        'budget': '1 000 000 so\'m',
        'duration': '1 oy',
        'details': 'Need complete Instagram management for my business'
    }

    result = bot.send_order_notification(test_order)
    print("Message sent:", result)
