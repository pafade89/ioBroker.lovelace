
const instancesPath = 'instances.';

class BrowserModModule {
    constructor(options) {
        this.adapter = options.adapter;
        this.objects = options.objects;
        this.clients = {};
        this.browserModStorage = {
            browsers: {},
            version: '2.0',
            settings: {
                //possible settings. Send them all.
                hideSidebar: true, //set this to true for now -> might make change in frontend unnecessary. And maybe we can use it later.
                hideHeader: false,
                defaultPanel: null,
                sidebarPanelOrder: null,
                sidebarHiddenPanels: null,
                sidebarTitle: null,
                faviconTemplate: null,
                titleTemplate: null,
                hideInteractIcon: true, //is the icon to configure browser_mod -> not working currently, so let's hide it.
                autoRegister: true,
                lockRegister: null
            },
            user_settings: {} //hm.. what is this? -> you can select settings on a per user basis. Proably stored here. Let's try that sometime.
        };

        this.knownViews = [];
        this.knownViewsStates = {};
    }

    async _checkObjects(ioBrokerDeviceId, browserId, battery = false) {
        ioBrokerDeviceId = this.adapter.namespace + '.' + ioBrokerDeviceId;
        //create device / folder:
        if (!this.objects[ioBrokerDeviceId]) {
            if (!browserId) {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId, {
                    type: 'folder',
                    common: {name: 'UI Instances'},
                    native: {}
                });
            } else {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId, {
                    type: 'device',
                    common: {name: browserId},
                    native: {instance: browserId}
                });
                this.adapter.log.info('New browser_mod instance ' + browserId);
            }
        }

        if (!this.objects[ioBrokerDeviceId + '.path']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.path', {type: 'state', common: {
                name: 'UI is showing path',
                type: 'string',
                read: true,
                write: true,
                role: 'state',
                states: this.knownViewsStates
            }, native: { instance: browserId }});
        }

        if (!this.objects[ioBrokerDeviceId + '.visible'] && browserId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.visible', {
                type: 'state', common: {
                    name: 'UI is visible',
                    type: 'boolean',
                    read: true,
                    write: false,
                    role: 'sensor'
                }, native: {instance: browserId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.activity'] && browserId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.activity', {
                type: 'state', common: {
                    name: 'User is active in this browser',
                    type: 'boolean',
                    read: true,
                    write: false,
                    role: 'sensor'
                }, native: {instance: browserId}
            });
        }

        if (battery) {
            if (!this.objects[ioBrokerDeviceId + '.battery'] && browserId) {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.battery', {
                    type: 'channel',
                    common: {
                        name: 'battery'
                    },
                    native: {}
                });
            }

            if (!this.objects[ioBrokerDeviceId + '.battery.level'] && browserId) {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.battery.level', {
                    type: 'state', common:
                        {
                            name: 'battery',
                            type: 'number',
                            read: true,
                            write: false,
                            role: 'value.battery'
                        }, native: {instance: browserId}
                });
            }

            if (!this.objects[ioBrokerDeviceId + '.battery.charging'] && browserId) {
                await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.battery.charging', {
                    type: 'state', common:
                        {
                            name: 'charging',
                            type: 'boolean',
                            read: true,
                            write: false,
                            role: 'indicator.plugged'
                        }, native: {instance: browserId}
                });
            }
        }

        if (this.objects[ioBrokerDeviceId + '.name']) {
            await this.adapter.delObjectAsync(ioBrokerDeviceId + '.name');
        }

        if (!this.objects[ioBrokerDeviceId + '.more_info']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.more_info', {
                type: 'state', common: {
                    name: 'Show more_info of entity_id',
                    type: 'string',
                    read: false,
                    write: true,
                    role: 'state'
                }, native: {instance: browserId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.toast']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.toast', {
                type: 'state', common: {
                    name: {
                        en: 'Notification in bottom left.',
                        de: 'Benachrichtigung unten links'
                    },
                    desc: {
                        en: 'Simple text or optional as json with fields: message, duration, action_text, action, see browser_mod notification dokumentation',
                        de: 'Einfacher text oder optional als json mit den Feldern: message, duration, action_text, action, wie in der Dokumentation zu browser_mod unter dem Punkt notification'
                    },
                    type: 'string',
                    read: false,
                    write: true,
                    role: 'json'
                }, native: {instance: browserId}
            });
        }

        if (this.objects[ioBrokerDeviceId + '.notification']) {
            await this.adapter.delObjectAsync(ioBrokerDeviceId + '.notification');
        }

        if (!this.objects[ioBrokerDeviceId + '.popup']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.popup', {
                type: 'state', common: {
                    name: 'Show popup',
                    type: 'string',
                    read: false,
                    write: true,
                    role: 'json'
                }, native: {instance: browserId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.popup_close']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.popup_close', {
                type: 'state', common: {
                    name: 'Close popups or more_info dialogs.',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button'
                }, native: {instance: browserId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.refresh']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.refresh', {
                type: 'state', common: {
                    name: 'Reload webpage',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button'
                }, native: {instance: browserId}
            });
        }

        //remove old states, if they are still there. Version 3.0.0
        if (this.objects[ioBrokerDeviceId + '.window_reload']) {
            await this.adapter.delObjectAsync(ioBrokerDeviceId + '.window_reload');
        }
        if (this.objects[ioBrokerDeviceId + '.lovelace_reload']) {
            await this.adapter.delObjectAsync(ioBrokerDeviceId + '.lovelace_reload');
        }

        if (!this.objects[ioBrokerDeviceId + '.blackout']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.blackout', {
                type: 'state', common: {
                    name: 'Blackout screen',
                    type: 'boolean',
                    read: false,
                    write: true,
                    role: 'button'
                }, native: {instance: browserId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.online'] && browserId) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.online', {
                type: 'state', common:
                    {
                        name: 'online',
                        type: 'boolean',
                        read: true,
                        write: false,
                        role: 'indicator.reachable',
                        def: true
                    }, native: {instance: browserId}
            });
        }

        if (!this.objects[ioBrokerDeviceId + '.hideHeader']) {
            await this.adapter.setObjectNotExistsAsync(ioBrokerDeviceId + '.hideHeader', {
                type: 'state',
                common: {
                    name: 'Hide Header',
                    type: 'boolean',
                    read: true,
                    write: true,
                    role: 'switch',
                    default: this.browserModStorage.settings.hideHeader
                },
                native: {
                    instance: browserId
                }
            });
        } else {
            //read hideHeader setting from object:
            const hideHeader = await this.adapter.getStateAsync(ioBrokerDeviceId + '.hideHeader');
            if (hideHeader) {
                if (browserId) {
                    this.initialiseBrowserSettings(browserId);
                    this.browserModStorage.browsers[browserId].settings.hideHeader = hideHeader.val;
                } else {
                    this.browserModStorage.settings.hideHeader = hideHeader.val;
                }
            }
        }
    }

    initialiseBrowserSettings(browserId) {
        if (!this.browserModStorage.browsers[browserId]) {
            this.browserModStorage.browsers[browserId] = {
                last_seen: 0,
                registered: true,
                locked: false,
                camera: false,
                settings: this.browserModStorage.settings, //send default settings...?
                meta: 'default'
            };
        }
    }

    //store infos about browser instance
    async _handleUpdate(ioBrokerDeviceId, message) {
        if (message.browserID && this.browserModStorage.browsers[message.browserID]) {
            this.browserModStorage.browsers[message.browserID].last_seen = Date.now() / 1000;
        }
        if (message.data) {

            if (message.data.browser) {
                //check if all objects in ioBroker are created.
                if (message.data.browser.battery_level) {
                    await this._checkObjects(ioBrokerDeviceId, message.browserID, true);
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.battery.level', message.data.browser.battery_level, true);
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.battery.charging', message.data.browser.charging || false, true);
                } else {
                    await this._checkObjects(ioBrokerDeviceId, message.browserID);
                }

                if (message.data.browser.path) {
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.path', message.data.browser.path, true);
                }
                if (message.data.browser.visibility) {
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.visible', message.data.browser.visibility === 'visible', true);
                }
            }
            if (typeof message.data.activity === 'boolean') {
                await this.adapter.setStateAsync(ioBrokerDeviceId + '.activity', message.data.activity, true);
            }
            if (typeof message.data.screen_on === 'boolean') {
                await this.adapter.setStateAsync(ioBrokerDeviceId + '.blackout', !message.data.screen_on, true);
            }
            if (message.data.player) {
                // volume: 1 (?), muted: boolean, src: '', state === 'stopped'
            }
        }
    }

    _sendToClient(client, message) {
        client.ws.send(JSON.stringify({
            id: client.subscribeId,
            ...message
        }));
    }

    async processMessage(ws, message) {
        if (message.type && message.type.startsWith('browser_mod/')) {
            const method = message.type.split('/')[1];
            // console.log('Incoming browser_mod message:');
            // console.dir(message, {depth: null});

            if (!message.browserID) {
                this.adapter.log.warn('No browser ID in browser_mod request: ' + JSON.stringify(message));
                return;
            }
            const ioBrokerDeviceId = instancesPath + message.browserID;

            if (method === 'update') {
                await this._handleUpdate(ioBrokerDeviceId, message);
            } else if (method === 'connect') { // similar to 'subscribe'.
                ws.on('close', async () => {
                    this.adapter.log.debug(`Instance ${message.browserID} disconnected.`);
                    delete this.clients[message.browserID];
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.online', false, true);
                });

                this.adapter.log.debug(`Instance ${message.browserID} connected.`);
                this.clients[message.browserID] = {
                    subscribeId: message.id,
                    instance: message.browserID,
                    ws
                };

                ws.send(JSON.stringify([{id: message.id, type: 'result', success: true, result: null}, {
                    id: message.id, type: 'event', event: {
                        event_type: 'ready',
                        origin: 'LOCAL',
                        result: this.browserModStorage,
                        time_fired: new Date().toISOString()
                    }
                }]));

                if (this.objects[`${this.adapter.namespace}.${ioBrokerDeviceId}.online`]) {
                    await this.adapter.setStateAsync(ioBrokerDeviceId + '.online', true, true);
                } else {
                    console.log('No objects for instance, yet..', `${ioBrokerDeviceId}.online`, this.objects[ioBrokerDeviceId], this.objects);
                }
            } else if (method === 'register') {
                this.initialiseBrowserSettings(message.browserID);

                // if data.browserID exists, browserID is changed -> copy stuff and delete old id.
                if (message.data && message.data.browserID) {
                    for (const id of Object.keys(this.objects)) {
                        if (id.startsWith(ioBrokerDeviceId)) {
                            delete this.objects[id];
                        }
                    }
                    try {
                        await this.adapter.deleteObjectAsync(ioBrokerDeviceId, {recursive: true});
                        await this._checkObjects(ioBrokerDeviceId, message.data.browserID);
                    } catch (e) {
                        this.adapter.log.warn('Could not delete old instance objects in ' + ioBrokerDeviceId + ', please do so yourself. Error was: ' + e);
                    }
                    delete this.browserModStorage.browsers[message.browserID];
                    delete message.data.browserID;
                    this.browserModStorage.browsers[message.data.browserID] = message.data;
                } else {
                    try {
                        await this._checkObjects(ioBrokerDeviceId, message.browserID);
                    } catch (e) {
                        this.adapter.log.warn('Could not delete old instance objects in ' + ioBrokerDeviceId + ', please do so yourself. Error was: ' + e);
                    }
                    if (this.objects[`${this.adapter.namespace}.${ioBrokerDeviceId}.online`]) {
                        await this.adapter.setStateAsync(ioBrokerDeviceId + '.online', true, true);
                    } else {
                        console.log('No objects for instance, yet..', `${ioBrokerDeviceId}.online`, this.objects[ioBrokerDeviceId], this.objects);
                    }
                }
            } else if (method === 'log') {
                this.adapter.log.debug('Message from browser_mod: ' + message.message);
            } else if (method === 'settings') {
                //{"type":"browser_mod/settings","key":"autoRegister","value":true,"id":200} <- something like this...
                if (message.key && this.browserModStorage.settings[message.key] !== undefined) {
                    this.browserModStorage.settings[message.key] = message.value;
                    this.adapter.log.debug('Updated browser_mod settings: ' + message.key + ' to ' + message.value);
                }
                //think about making this permanent somehow? -> but only if we find a way to allow browser_mod_settings panel.
            } else {
                this.adapter.log.warn('Unknown browser_mod method: ' + JSON.stringify(message));
            }
            return true;
        } else {
            return false;
        }
    }

    async onStateChange(id, state) {
        //console.log(id);
        if (state && !state.ack && id.startsWith(`${this.adapter.namespace}.${instancesPath}`)) { //ok, is relevant for us.
            const parts = id.split('.');
            const browserId = parts[3];
            let command = parts[4];
            let allDevices = false;
            if (!command) {
                command = parts[3];
                allDevices = true;
            }

            let event = {
                event_type: 'browser_mod/command',
                command,
                origin: 'LOCAL',
                time_fired: new Date().toISOString()
            };

            const client = this.clients[browserId];
            if (allDevices || client) {
                switch (command) {
                    case 'blackout':
                        if (!state.val) {
                            event.command = 'screen_on';
                        } else {
                            event.command = 'screen_off';
                        }
                        break;
                    case 'path':
                        event.command = 'navigate';
                        event.path = state.val;
                        break;
                    case 'more_info':
                        event.entity = state.val;
                        break;
                    case 'toast':
                        event.command = 'notification';
                        if (state.val) {
                            try {
                                const {duration,
                                    message,
                                    action_text,
                                    action
                                } = JSON.parse(state.val);
                                event.duration = duration;
                                event.message = message;
                                event.action_text = action_text;
                                event.action = action;
                            } catch (e) {
                                if (state.val.includes(';')) {
                                    [event.duration, event.message, event.action_text, event.action] = state.val.split(';');
                                    if (event.action) {
                                        try {
                                            event.action = JSON.parse(event.action);
                                        } catch (e) {
                                            this.adapter.debug('Could not parse action string ' + event.action);
                                        }
                                    }
                                } else {
                                    event.message = state.val;
                                }
                            }
                        } else {
                            return;
                        }
                        break;
                    case 'popup':
                        if (state.val) {
                            try {
                                const popup = JSON.parse(state.val);
                                for (const key of Object.keys(popup)) {
                                    event[key] = popup[key];
                                }
                            } catch (e) {
                                this.adapter.log.error('Could not parse popup object: ', e);
                                return;
                            }
                        } else {
                            return;
                        }
                        break;
                    case 'popup_close':
                        if (state.val) {
                            event.command = 'close_popup';
                        } else {
                            return;
                        }
                        break;
                    case 'refresh':
                        break;
                    case 'hideHeader':
                        if (allDevices) {
                            this.browserModStorage.settings.hideHeader = state.val;
                        } else {
                            this.browserModStorage.browsers[browserId].hideHeader = state.val;
                        }
                        event = {
                            result: this.browserModStorage
                        };
                        break;
                    default:
                        return;
                }

                //console.log('sending: ', event);
                if (allDevices) {
                    for (const client of Object.values(this.clients)) {
                        this._sendToClient(client, {
                            type: 'event',
                            event,
                            id: client.subscribeId
                        });
                    }
                } else {
                    event.browserID = client.instance;
                    this._sendToClient(client, {
                        type: 'event',
                        event,
                        id: client.subscribeId
                    });
                }
            } else {
                this.adapter.log.warn('Device ' + browserId + ' currently not connected. Can not send command ' + command);
            }
        }
    }

    async handeUpdatedConfig(lovelaceConfig) {
        let needUpdate = false;
        for (const view of lovelaceConfig.views) {
            const viewPath = '/lovelace/' + view.path;
            if (!this.knownViews.includes(viewPath)) {
                needUpdate = true;
                this.knownViews.push(viewPath);
            }
        }

        if (needUpdate) {
            this.knownViewsStates = {};
            for (let i = 0; i < this.knownViews.length; i += 1) {
                this.knownViewsStates[this.knownViews[i]] = this.knownViews[i];
            }

            for (const id of Object.keys(this.objects)) {
                if (id.startsWith(this.adapter.namespace + '.' + instancesPath) && id.endsWith('.path')) {
                    this.adapter.extendObject(id, {
                        common: {
                            type: 'string',
                            states: this.knownViewsStates
                        }
                    }, () => { this.adapter.log.debug('Updated ' + id); });
                }
            }
        }
    }

    async init (lovelaceConfig) {
        await this.handeUpdatedConfig(lovelaceConfig);
        await this._checkObjects(instancesPath.substring(0, instancesPath.length - 1));

        for (const id of Object.keys(this.objects)) {
            if (id.startsWith(this.adapter.namespace + '.' + instancesPath)) {
                if (id.endsWith('.online')) {
                    await this.adapter.setState(id, false, true);
                } else if (id.endsWith('hideHeader')) {
                    const hideHeader = await this.adapter.getStateAsync(id);
                    if (hideHeader) {
                        if (id === this.adapter.namespace + '.' + instancesPath + 'hideHeader') {
                            this.browserModStorage.settings.hideHeader = hideHeader.val;
                        } else {
                            //read hideHeader states from ioBroker objects.
                            const browserId = id.split('.')[3];
                            this.initialiseBrowserSettings(browserId);
                            this.browserModStorage.browsers[id.split('.')[3]].settings.hideHeader = hideHeader.val;
                        }
                    }
                }
            }
        }
    }
}

module.exports = BrowserModModule;
