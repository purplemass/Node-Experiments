#http://popdevelop.com/2010/03/a-minimal-python-websocket-server/

# Echo client program
import socket
import sys
import time

HOST = '127.0.0.1'
#HOST = '192.168.1.215'
PORT = 8080
s = None

for res in socket.getaddrinfo(HOST, PORT, socket.AF_UNSPEC,
							socket.SOCK_STREAM):

	af, socktype, proto, canonname, sa = res
	try:
		s = socket.socket(af, socktype, proto)
	except socket.error, msg:
		s = None
		continue
	try:
		s.connect(sa)

	except socket.error, msg:
		s.close()
		s = None
		continue
	break

if s is None:
	print 'could not open socket'
	sys.exit(1)

s.send('This is the client')

print 'Connected...'

while 1:
	data = s.recv(1024)
	if (data <> ''):
		print 'Received', repr(data)
	time.sleep(1)
	s.send('This is the client')
		
s.send('This is the client')
	

s.close()
