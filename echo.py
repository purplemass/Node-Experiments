#!/usr/bin/python
import sys, os, asyncore, websocket    


if __name__ == '__main__':
    if len(sys.argv) != 2:
        sys.stderr.write('usage: %s <message>\n' % os.path.abspath(__file__))
        sys.exit(1)

    ws = websocket.WebSocket('ws://localhost:8080', 
                             onconnection=lambda: sys.stdout.write('Connection closed.\n'),
                             onopen=lambda: sys.stdout.write('Connection closed.\n'),
                             onmessage=lambda m: sys.stdout.write('Echo: %s\n' % m),
                             onclose=lambda: sys.stdout.write('Connection closed.\n'))
    ws.send(sys.argv[1])
    print 'ppp'
    try:
        asyncore.loop()
    except KeyboardInterrupt:
        ws.close()


# def my_msg_handler(msg):
#   print 'Got "%s"!' % msg
# 
# socket = websocket.WebSocket('ws://localhost:8080', 
# 	onmessage=lambda m: my_msg_handler(m))
# socket.onopen = lambda: socket.send('Hello world!')
# 
# try:
#   asyncore.loop()
# except KeyboardInterrupt:
#   socket.close()

