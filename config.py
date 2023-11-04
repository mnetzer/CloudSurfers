import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://<user>:<user>@/<users>?unix_socket=/cloudsql/cloudsurfers-403912:us-central1:user-sql'
    # Other configuration options

    # To generate a secret key, you can use os.urandom(24)
    SECRET_KEY = os.urandom(24)

    # Additional configuration options

# You can define other configurations like development, production, etc.
