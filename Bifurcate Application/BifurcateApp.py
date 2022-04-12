# -*- coding: utf-8 -*-
"""
Created on Tue Mar 29 04:50:22 2022

@author: Mehsan
"""
import os
import PIL 
import time
import email, smtplib, ssl

from tkinter import *
from email import encoders
from email.mime.base import MIMEBase
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC



#function that runs when button is clicked on tkinter UI
def click():
    global r_email
    r_email = text.get()
    window.destroy()

def close():
    window.destroy()



#tkinter UI that prompts user for receipient email address
window = Tk()

window.title("Bifurcate")
Label(window, text = "Enter recipient email address: ",  font = "none 12 bold").grid(row=1,column=0,sticky=W)

text = Entry(window, width=20,bg = "white")
text.grid(row=2,column=0,sticky=W)

Button(window, text="Submit",width =7, command=click).grid(row=3,column=0,sticky=W)
Button(window, text="Exit",width =7, command=close).grid(row=3,column=1,sticky=W)

window.mainloop()


#selenium webdriver to run chrome and scrape data from canadian tire

options = Options()
options.headless = False

options.add_argument("start-maximized")
# code to avoid bot detection
options.add_argument('--disable-blink-features=AutomationControlled')


#path for .exe program to find chromedriver.exe
def resource(r_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.dirname(__file__)
    return os.path.join(base_path, r_path)

driver = webdriver.Chrome(resource('./driver/chromedriver.exe'))
driver.get("https://www.canadiantire.ca/en.html")

#counter to check if chromedriver is on the canadian tire cart webapage
counter = 0
while counter == 0: 
    if driver.current_url == 'https://www.canadiantire.ca/en/shopping-cart.html':
        time.sleep(5)
        cart = driver.find_element_by_xpath("/html/body/main/div[3]/div/div/div[3]/div[2]/div/div/div[2]/div[2]/section[3]/div")
        cart.screenshot("costs.png")
        image = driver.find_element_by_xpath("/html/body/main/div[3]/div/div/div[2]/div[3]")
        image.screenshot("items.png")
        time.sleep(1)
        counter = 1      
driver.close()
   

#sending emails with python

subject = "Bifurcate Invite!"
body = "Hello, This email contains the items you need to buy and their costs"
#dummy email for testing purposes
sender_email = "bifurcatewebserv@gmail.com"
password = "webapplication"


message = MIMEMultipart()
message["From"] = sender_email
message["To"] = r_email
message["Subject"] = subject
message["Bcc"] = r_email  

# Adding the body to email
message.attach(MIMEText(body, "plain"))

#adding attachment to email
filename = "items.png"

# Opening file file in binary mode
with open(filename, "rb") as attachment:
    attach1 = MIMEBase("application", "octet-stream")
    attach1.set_payload(attachment.read())

# Encode file in ASCII characters    
encoders.encode_base64(attach1)

attach1.add_header(
    "Content-Disposition",
    f"attachment; filename= {filename}",
)

# Add attachment to message and convert message to string
message.attach(attach1)
text = message.as_string()

filename = "costs.png"  

# Open file in binary mode
with open(filename, "rb") as attachment:

    attach2 = MIMEBase("application", "octet-stream")
    attach2.set_payload(attachment.read())

# Encode file in ASCII characters  
encoders.encode_base64(attach2)

attach2.add_header(
    "Content-Disposition",
    f"attachment; filename= {filename}",
)
# Add attachment to message and convert message to string
message.attach(attach2)
text = message.as_string()

#logging into server to send mail
serv = ssl.create_default_context()
with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=serv) as server:
    server.login(sender_email, password)
    server.sendmail(sender_email, r_email, text)
    
