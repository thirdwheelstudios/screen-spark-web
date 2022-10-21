import { defineStore } from 'pinia'
import { io, Socket } from 'socket.io-client'

export enum SocketStatus {
  disconnected = 1,
  connecting,
  connected,
  error,
}

export const useSocketsStore = defineStore('sockets', {
  state: () => {
    let _socket: Socket | undefined
    let _senderId: string | undefined
    let _sdp: RTCSessionDescription | null | undefined
    let _candidate: RTCIceCandidate | null | undefined
    let _status: SocketStatus | undefined
    let _socketId: string | undefined

    return { _socket, _senderId, _sdp, _candidate, _status, _socketId }
  },
  getters: {
    id(state) {
      return state._socketId
    },
    isConnected(state) {
      return state._status === SocketStatus.connected
    },
    senderId(state) {
      return state._senderId
    },
    sdp(state) {
      return state._sdp
    },
    candidate(state) {
      return state._candidate
    },
    status(state) {
      return state._status
    },
  },
  actions: {
    connect() {
      this._status = SocketStatus.connecting

      const socket = io(import.meta.env.VITE_SOCKET_API_URL, {
        extraHeaders: {
          'x-api-key': import.meta.env.VITE_SOCKET_API_KEY,
        },
      })

      socket.on('connect', () => {
        this._socketId = socket.id
        this._status = SocketStatus.connected
      })

      socket.on('disconnect', () => {
        this._status = SocketStatus.disconnected
      })

      socket.on('senderConnected', (senderId: string) => {
        this._senderId = senderId
      })

      socket.on('iceCandidate', (candidate: RTCIceCandidate) => {
        this._candidate = candidate
      })

      socket.on('sdp', (sdp: RTCSessionDescription | null) => {
        this._sdp = sdp
      })

      this._socket = socket
    },
    notifyReceiver(receiverId: string) {
      this._socket?.emit('connectToReceiver', receiverId)
    },
    sendIceCandidate(receiverId: string, candidate: RTCIceCandidate) {
      this._socket?.emit('iceCandidate', receiverId, candidate)
    },
    sendSdp(receiverId: string, sdp: RTCSessionDescription | null) {
      this._socket?.emit('sdp', receiverId, sdp)
    },
  },
})
