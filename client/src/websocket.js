/* WebsocketClient, usage:
wsClient = new WebSocketClient({
    url: "ws://" + location.host,
    protocol: "optional",
    autoReconnectInterval: 5000, // default is 0, without reconnect
    onopen: () => {  ...  },
    onmessage: (msg) => {  ...  },
    onclose: function () {  ...  },
    onerror: function (err) {  ...  }
});
*/
export default function WebSocketClient(opt) {
    if (!window.WebSocket) return false;

    let client = this;
    this.onclose = function () {
        console.log("websocket connection closed");
    }
    this.onerror = function (err) {
        console.log("websocket error: ", err);
    }
    for (var key in opt)
        this[key] = opt[key];
    this.reconnect = function (e) {
        if (client.autoReconnectInterval) {
            console.log(`WebSocketClient: retry in ${client.autoReconnectInterval}ms`, e);
            setTimeout(function () {
                console.log("WebSocketClient: reconnecting...");
                client.open();
            }, client.autoReconnectInterval);
        }
    }
    this.send = function (JSONobj) {
        client.ws.send(JSON.stringify(JSONobj));
    }
    this.open = function () {
        client.ws = new WebSocket(client.url, client.protocol);
        client.ws.onopen = client.onopen;
        client.ws.onmessage = client.onmessage;
        client.ws.onclose = function (e) {
            switch (e) {
                case 1000:  // CLOSE_NORMAL
                    console.log("WebSocket: closed");
                    break;
                default:    // Abnormal closure
                    client.reconnect(e);
                    break;
            }
            client.onclose && client.onclose(e);
        };
        client.ws.onerror = function (e) {
            switch (e.code) {
                case 'ECONNREFUSED':
                    client.reconnect(e);
                    break;
                default:
                    client.onerror || client.onerror(e);
                    break;
            }
        };
    }
    this.reopen = function () {
        client.ws.onerror = client.ws.onclose = client.ws.onmessage = null;
        client.ws.close();
        this.open();
    }
    this.open();
    return this;
}