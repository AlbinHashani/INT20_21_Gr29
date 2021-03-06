 <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contact</title>
    <script src="index.js"></script>
    <style type="text/css">
        *{
            margin: 0;
            padding: 0;
            font: Century Gothic;
        }
        header
        {
            font-family: Verdana;
            background-color:  #070c2f;
            height: 135px;
            color: #fff;
        }
        ul.ul1{
            float: right;
            list-style-type: none;
            margin-top: 55px;
            margin-right: 940px;
        }
        ul.ul1 li{
            display: inline-block;
        }
        ul.ul1 li a{
            text-decoration: none;
            color: #fff;
            padding: 5px 25px;
            border: 1px solid #fff;
            transition: 0.6s ease;
        }
        ul.ul1 li a:hover{
            background-color: #fff;
            color: #000;
        }
        .logo img{
            margin-left: 10px;
            float: left ;
            width: 60px;
            height: auto;
        }
        ul li.active a{
            background-color: #fff;
            color: #000;
        }
        body{
            background-image: url(img/nbaaa.jpg);
            width: 100%;
            height: auto;
        }
        .box{
            border-radius: 15px;
            width: 500px;
            background-color: #ebedef;
            box-shadow: black;
            top: 40%;
            left: 40%;
            transform: translateX(-50%,-50%);
            position: absolute;
            resize: both;
            overflow: hidden;
        }
        form{
            margin: 45px;
        }
        .input-field{
            width: 400px;
            height: 40px;
            margin-top: 20px;
            padding-left: 10px;
            padding-right: 10px;
            border: 1px solid #777;
            border-radius:14px ;

        }
        #p{
            font-family: verdana;
            text-align: center;
            margin-top: 10px;
            padding-bottom: -100px;
        }
        .button
        {
            border-radius: 20px;
            color: #fff;
            padding: 10px;
            background-color: #070c2f;
            margin-top: 10px;
            font-size: ;
            border: none;
            cursor: pointer;
            margin-bottom: 10px;


        }
        #hr{
            width: auto;
        }
        #p1{
            font-family: verdana;
            margin-top: 10px;
        }
        .radio{
            font-family: verdana;
        }
        .submit{
            border-radius: 10px;
            padding: 8px;
            background-color: #070c2f;
            color: white;
        }
        .footer-container{
            padding-top: 3%;
            position: sticky;
            background-color: #070c2f;
            padding-bottom: 4rem;
            margin-top: 47%;

        }
        .footer{
            width: 80%;
            height: 10vh;
            background-color: #070c2f;
            color: #fff;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin: 0 auto;
            font-family: verdana;
        }
        .footer-heading{
            display: flex;
            flex-direction: column;
            margin-right: 4rem;
            margin-left: 4rem;

        }
        .footer-heading h2{
            margin-bottom: 2rem;
        }
        .footer-heading a{
            color: #fff;
            text-decoration: none;
            margin-bottom: 0.5rem;
        }
        .footer-heading a:hover{
            color: #ebedef;
            transition: 0.6s ease-out;

        }
        .footer-email h2{
            margin-bottom: 2rem;
        }
        #footer-email{
            width: 250px;
            height: 40px;
            border-radius: 5px;
            outline: none;
            border: none;
            padding-left: 0.5rem;
            font-size: 1rem;
            margin-bottom: 0.8rem;
        }
        #footer-email-btn{
            width: 100px;
            height: 40px;
            border-radius: 5px;
            background-color: #f9423d;
            margin-bottom: 1rem;
            outline: none;
            border: none;
            color: #fff;
            font-size: 1rem;
        }
        #footer-email-btn:hover{
            cursor: pointer;
            background-color: #337af1;
            transition: 0.6s ease-out;
        }
        .signup{
            display: block;
        }
        ul.ul-footer{
            margin-left: 17px;
        }
        ul.ul-footer li a{
            text-decoration: none;
            color: #fff;
            margin-left: 10px;
        }
    </style>
</head>
<body>
    <header>
        <hr color="#fff">
        <div class="main">
            <div class="logo">
                <a href="NBA.html"><img  src="logo.png"></a>
            </div>
                <ul class="ul1">
                    <li><a href = "NBA.html">HOME</a></li>
                    <li><a href = "statistics.html">STATISTICS</a></li>
                    <li><a href="schedule.html">SCHEDULE</a></li>
                    <li><a href="history1.html">HISTORY</a></li>
                    <li><a href="standings.html">STANDINGS</a></li>
                    <li class="active"><a href = "contact.html">CONTACT</a></li>
                </ul>
            </div>
    </header>
    <div class="box">
        <p id="p">Hello, you can contact us here, </p>
        <form name="forma"   onsubmit="return validateForm()" method="post">
            <input type="text" name="fname" class="input-field"  placeholder="Your Name">
            <input type="email" name="fname"  class="input-field"  placeholder="Your Email">
            <input type="text" name="fname" class="input-field"  placeholder="Subject">
            <textarea type="text" name="fname" class="input-field" placeholder="Your message"></textarea>
            <button type="button"  class="button">Send Message / D&euml;rgoni mesazh</button>
            <hr id="hr">
            
        <p id="p1">Please rate our page:</p>
            <input type="radio" class="radio" >
            <label>Good</label><br>
            <input type="radio" class="radio" >
            <label >Bad</label><br>  
            <input type="radio" class="radio">
            <label>Awesome</label><br><br>
            <input type="submit" class="submit" value="Submit">
        </form>
    </div>
   <div class="footer-container">
        <div class="footer">
        <div class="adresa">
            <address>
                
                    <p>?? 2021 NBA Media Venture,LLC,All rights reserved</p>
                    <ul class="ul-footer">
                        <li>More: </li>
                        <ul>
                            <li><a href="NBA.html">About Us</a></li>
                            <li><a href="login.html">Log in</a></li>
                        </ul>
                    </ul>
                    <p>You can ,<a href="mailto:someone@example.com">Send email</a> to us.</p>
            </address>
        </div>  
            <div class="footer-heading ">
                <h2>Social Media</h2>
                <a href="https://www.facebook.com" target="_blank">Facebook</a>
                <a href="https://www.instagram.com" target="_blank">Instagram</a>
                <a href="https://www.twitter.com" target="_blank">Twitter</a>
            </div>
            <div class="signup">
            <div class="footer-email">
                <h2>Join our company</h2>
                <input type="email" placeholder="Enter your email adress" id="footer-email">
                <input type="submit" id="footer-email-btn" value="Sign up">
            </div>
            <input type="checkbox" id="footer-email-chb" >I agree to the <a href="">Terms and Conditions</a>
        </div>
        </div>
    </div>
</body>
</html>
