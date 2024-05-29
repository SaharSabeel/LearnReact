export function CreateConnection(serverUrl,roomId){
    return {
        connect(){
            console.log(`✔️ ... connected to ${roomId} at server ${serverUrl}`)
        },
        disconnect(){
            console.log(`❌... diconnected to ${roomId} at server ${serverUrl}`)
        }
    }
}