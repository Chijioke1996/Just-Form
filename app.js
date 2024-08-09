const form = document.querySelector(".form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value

    const formData = { name, email }
    const url = "http://localhost:5000/api/v1/form"

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        const result = await response.json()

        if (response.ok) {
            window.location.href = "/welcome.html"
        }

    } catch (error) {
        console.error("Error:", error)
        window.location.href = "/index.html"
    }



})
