import os
from dotenv import load_dotenv
load_dotenv()

SECRET_KEY = os.environ.get("SECRET_KEY", "default_dev_key")
print("Loaded SECRET_KEY:", SECRET_KEY)
