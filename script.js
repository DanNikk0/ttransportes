document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('service-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const companyName = document.getElementById('company-name').value.trim();
        const contactPhone = document.getElementById('contact-phone').value.trim();
        const cargoDetails = document.getElementById('cargo-details').value.trim();

        
        if (!companyName || !contactPhone || !cargoDetails) {
            alert("Por favor, preencha todos os campos.");
            return; 
        }
        alert("Formulário enviado com sucesso! Entraremos em contato em breve.");

        form.reset();
    });
});
