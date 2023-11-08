$(document).ready(function () {
    $("#schoolForm").validate({
        rules: {
            school: "required",
            date: "required",
            graduated: "required"
        },
        messages: {
            school: "Please enter your school name.",
            date: "Please select the date.",
            graduate: "Please select your status."
        }
    });
            
    $("#personalForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                pattern: /^(?:\+?1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/
            },
            postalCode: {
                required: true,
                pattern: /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ ]?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/
            }
        },
        messages: {
            email: {
                required: "Please enter your email.",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number.",
                phone: "Please enter a valid Canada phone number (e.g., 123-456-7890)."
            },
            postalCode: {
                required: "Please enter your postal code.",
                postalCode: "Please enter a valid Canada postal code (e.g., A1A 1A1)."
            },
        },
    });

    $("#paymentForm").validate({
        rules: {
            creditCard: {
                required: true,
                pattern: /^\d{10}$/
            },
            expDate: "required",
            cvv: {
                required: true,
                pattern: /^\d{3}$/
            }
        },
        messages: {
            creditCard: {
                required: "Please enter your credit card number.",
                creditCard: "Credit card must be a 10-digit number."
                },
            expDate: "Please select the date",
            cvv: {
                required: "Please enter your CVV number.",
                cvv: "CVV must be a 3-digit number."
                }
            }
    });
});