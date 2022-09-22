(function () {
    const div = document.querySelector('div');

    function getData(delay) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    }

    async function main() {
        const start = Date.now();

        // fetch code
        const [user, dm, adm] = await Promise.all([
            getData(1500), // grab user
            getData(1350), // grab data model
            getData(1000) // grab aux data models
        ]);

        const end = Date.now();

        if (!div) {
            console.log('No div :(');
            return;
        }

        div.textContent = `${((end - start) / 1000).toFixed(3)}s`;
    }

    main();
})();