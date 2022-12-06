import serial           # import the module
NC4Port = serial.Serial('COM10',timeout=1) # open COM3
NC4Port.baudrate = 9600 # set Baud rate to 115200
NC4Port.bytesize = 8    # Number of data bits = 8
NC4Port.parity   = 'N'  # No parity
NC4Port.stopbits = 1    # Number of Stop bits = 1
#print(NC4Port)
#speed=NC4Port.write("speed 6\r".encode())
#data = NC4Port.readline()        # Wait and read data
#print(data.decode())
move=NC4Port.write("DO READY\r".encode())
data = NC4Port.readline()        # Wait and read data
print(data.decode())
#NC4Port.write("coarse ?\r".encode())
#data = NC4Port.readline()        # Wait and read data
#print(data.decode())
NC4Port.close()         # Close the Com port
