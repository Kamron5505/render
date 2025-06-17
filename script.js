let row = document.querySelector(".row");

async function render() {
    let apiUrl = "https://randomuser.me/api/";
    row.innerHTML = "";

    await fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const users = data.results;

            users.map((item) => {
                let card = document.createElement("div");
                card.className =
                    "bg-white rounded-[20px] shadow-xl max-w-sm w-full overflow-hidden m-4";

                card.innerHTML = `
                <!-- Верхний фон -->
                <div class="relative h-32 bg-black">
                    <img src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f" 
                         alt="Background" 
                         class="absolute top-0 left-0 w-full h-full object-cover opacity-80" />
                </div>

                <!-- Аватар -->
                <div class="relative flex justify-center -mt-14">
                    <img src="${item.picture.large}" 
                         alt="Avatar" 
                         class="w-28 h-28 rounded-full border-4 border-white shadow-md" />
                </div>

                <!-- Контент -->
                <div class="text-center px-6 pb-6 mt-4">
                    <h2 class="text-2xl font-bold text-green-700">${item.name.first} ${item.name.last}</h2>
                    <p class="text-gray-700 font-medium text-md">Frontend Developer</p>

                    <hr class="my-4 border-t-[1px] border-teal-300 w-20 mx-auto" />

                    <div class="text-sm text-gray-800 space-y-1 text-left mt-4">
                        <p><strong>📞 Phone:</strong> ${item.phone}</p>
                        <p><strong>📍 Manzil:</strong> ${item.location.city}, ${item.location.street.name} ${item.location.street.number}</p>
                        <p><strong>🎂 Yosh:</strong> ${item.dob.age}</p>
                        <p><strong>📧 Email:</strong> ${item.email}</p>
                    </div>

                    <button onclick="render()" class="mt-5 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg shadow">
                        Change
                    </button>
                </div>
            `;

                row.appendChild(card);
            });
        });
}
render();
