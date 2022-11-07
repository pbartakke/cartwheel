<script runat="server" language="javascript">

    /**
     * This code file is a helper application built for
     * Salesforce Marketing Cloud. It runs on Cloud Pages
     * and provides a number of functionalities to ease
     * the day-to-day activities of SFMC Architects and
     * developers
     * 
     * @package Cartwheel
     * @version 1.0
     * @author Pritesh S. Bartakke
     */

    /** Load the Core library **/
    Platform.Load("core", "1.1");

    /** 
     * Set the application environment
     * 
     * dev - Enables error and message logging in the console
     * prod - disables error and message logging in the console
     **/
    var env = "dev";

    /** 
     * Set the Debug Mode
     * 
     * If debugMode = true, the error and message logging in the 
     * console is enabled, irrespective of the 'env' value. This
     * is useful if you just wish to see the console log in the
     * prod env. 
     **/
    var debugMode = Request.GetQueryStringParameter("debug");

    /**
     * Initiate the console object
     */
    var console = new console();

    try {

        /**
         * Initiate WSProxy
         */
        var wsproxy = new Script.Util.WSProxy();
    } catch(e) {
        console.log(e);
    }

    /**
     * Helper function to enable the Browser console.log
     * method in SSJS scripts.
     */
    function console() {

        if(env == "dev" || debugMode == "true") {

            this.log = function() {
                Write('<script>console.log("%cSFMC Debug Message:", "color:blue;")<\/script>');
                Write('<script>console.log(' + Platform.Function.Stringify(arguments) + ')<\/script>');
            }
        }
    }
</script>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <style media="screen">
            hr { margin-top: 1rem; margin-bottom: 1rem; border: 0; border-top: 1px solid rgba(0, 0, 0, 0.1);}
            .wrapper{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 300px;
                text-align:center;
                transform: translateX(-50%);
            }
        </style>
    </head>
    <body>
        <div class="container h-100 wrapper">
            <div class="row h-100 py-2 justify-content-center">
                <div class="col-6 align-self-center">
                    <div class="card border-secondary justify-content-center">
                        <div class="card-header text-center">
                            Hello, there!
                        </div>
                        <div class="card-body text-center">
                            <h3 class="card-title">Cartwheel Installation</h3>
                            <hr/>
                            <p class="card-text">Enter the Admin Username &amp; Password</p>
                            <form class="needs-validation" novalidate id="frmInstallation" name="frmInstallation" action="javascript:return;">
                                <div class="form-group row">
                                    <div class="form-group col-md-4 text-right">
                                        <label for="txtAdminUsername">Username</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" name="txtAdminUsername" id="txtAdminUsername" class="form-control" placeholder="" required />
                                        <div class="invalid-feedback text-left">Please enter a username.</div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="form-group col-md-4 text-right">
                                        <label for="txtAdminPassword">Password</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="password" name="txtAdminPassword" id="txtAdminPassword" class="form-control" placeholder="" required />
                                        <div class="invalid-feedback text-left">Please enter a username.</div>
                                    </div>
                                </div>
                                <input type="hidden" name="hdnFormName" value="CWInstall" id="hdnFormName" />
                                <input type="submit" value="Install Cartwheel" class="btn btn-primary" name="subInstallCW" id="subInstallCW" />
                            </form>
                        </div>
                        <div class="card-footer text-muted text-center">
                            &copy; 2021
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>