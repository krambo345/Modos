const interface = document.querySelector(".interface")
async function exec(name, icon) {
    const apps = await loadapps()
    interface.insertAdjacentHTML("beforeend", `<div class='win' data-windowname='${name}' data-windowicon='${icon}'><div class='winheader'></div><div class='content'>${apps[name]}</div></div>`)
    const win = interface.lastElementChild
    initializewindow(win)
}
async function loadapps() {
    try {
        const jsonraw = await fetch("/base/system/apps.json")
        if (!jsonraw.ok) {
            throw new Error(`Response status: ${jsonraw.status}`)
        }
        const apps = await jsonraw.json()
        return apps
    } catch (error) {
        console.error(error.message)
    }
}

