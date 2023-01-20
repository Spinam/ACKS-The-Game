export const FileHandler = (function(){
    const FileReader = (function(){})();
    const FileWriter = (function(){})();
    var instance;
    return {
        /** @param {string} src  The location of the JSON file */
        importJSON: function(src){
            return fetch(src)
                .then((response) => {
                    if(!response.ok) {
                        throw new Error(`HTTP error! Status ${response.status}`);
                    }

                    return response.json();
                });            
        },
    }
})()