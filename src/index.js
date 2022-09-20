// UTILS

class Observer {
    #callbacks = []

    subscribe(callback) {
        this.#callbacks.push(callback)
    }

    broadcast() {
        this.#callbacks.forEach(callback => {
            callback()
        })
    }
}

class Store extends Observer {
    value;

    constructor(initialValue) {
        super()
        this.value = initialValue;
    }

    update(nextValue) {
        this.value = nextValue;
        this.broadcast();
    }
}

// STATE

const app = {
    hasModalWindow: false,
    publications: []
}

const appStore = new Store(app);

function getPublicationsCount() {
    return app.publications.length
}

function isHasPublications() {
    return getPublicationsCount() > 0
}

// EVENTS
document.getElementById('add-button').addEventListener('click', () => {
    app.hasModalWindow = true;
    appStore.broadcast()
})

document.getElementById('create-button').addEventListener('click', () => {
    app.hasModalWindow = true;
    appStore.broadcast()
})

document.getElementById('close').addEventListener('click', () => {
    app.hasModalWindow = false;
    appStore.broadcast()
})

appStore.subscribe(() => {
    if (app.hasModalWindow) {
        document.getElementById('modal-window').style.display = 'block';
    } else {
        document.getElementById('modal-window').style.display = 'none';
    }
})

appStore.subscribe(() => {
    document.getElementById('publications-count').innerHTML = getPublicationsCount() + " publications";
})
