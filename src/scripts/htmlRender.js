export const htmlRender = (renderMe, assignToMe) =>{
    const location = document.getElementsByClassName(assignToMe)

    if (location) {
        location[0].innerHTML = renderMe
    } else {
        console.error(`Could not find element with id "${assignToMe}"`)
    }
}