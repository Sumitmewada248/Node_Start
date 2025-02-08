

const Footer = () => {
    return (
        <>
            <hr />

        <div id="footer" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#131921", color: "white", padding: "10px" ,position:"fixed",bottom:"0",width:"100%" }}>
            <div>
                <h3>MyFooter.Com</h3>
                <p>Online Shopping for Women, Men, Kids and Home
                    &copy; 2023 myfooter.com</p>
            </div>
            <div>
                <h3>Follow Us</h3>
                <p>Facebook | Twitter | Instagram | Youtube</p>
            </div>
            <div>
                <h3>Help</h3>
                <p>FAQ | Contact Us | About Us | Careers</p>
            </div>
            <div>
                <h3>Payment Method</h3>
                <p>Visa | Mastercard | Amex | PayPal | Debit Card</p>
            </div>
            <div>
                <h3>Order & Returns</h3>
                <p>Order Status | Order Tracking | Exchange | Refund</p>
            </div>
            <div>
                <h3>More</h3>
                <p>Gift Cards | Affiliate | Site Map | Privacy Policy</p>
            </div>
        </div>
           
        </>
    );
};

export default Footer