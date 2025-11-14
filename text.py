from twilio.rest import Client
import time

# Twilio credentials
account_sid = 'YOUR_TWILIO_SID'
auth_token = 'YOUR_TWILIO_AUTH_TOKEN'
client = Client(account_sid, auth_token)

to_number = '+92 342 1919598'  # Receiver
from_number = '03471347956'  # Twilio sandbox number

for i in range(5):  # send 5 messages
    message = client.messages.create(
        from_=from_number,
        body=f"Mukool   #{i+1}",
        to=to_number
    )
    print(f"Sent message {i+1} with SID: {message.sid}")
    time.sleep(2)  # wait 2 seconds between messages
