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
     * If debugMode = true, the error and message loggin in the 
     * console is enabled, irrespective of the 'env' value. This
     * is useful if you just wish to see the console log in the
     * prod env. 
     **/
    var debugMode = Request.GetQueryStringParameter("debug");

    /**
     * Enable Browser Console Logging for dev env and debugMode
     */
    if(env == "dev" || debugMode == "true") {

        var console = new console();
        console.log("Debug mode is ON");
    }

    /** Load WSProxy **/
    var wsproxy = new Script.Util.WSProxy();

    /** Global Output Variable **/
    var gblOutput = [];

    
    /*** Common Functions ***/

    /**
     * Get the Folder ID from SFMC
     */
    function retrieveFolderId(objData) {
        
        var wsResult = wsProxy.retrieve(
            "DataFolder",
            ["ID"],
            {
                LeftOperand: {
                    Property: "Name",
                    SimpleOperator: "equals",
                    Value: objData.name
                },
                LogicalOperator: "AND",
                RightOperand: {
                    Property: "ContentType",
                    SimpleOperator: "equals",
                    Value: objData.contentType
                }
            }
        );
        
        if(wsResult.Status == 'Error') {

            console.error("Error: Retrieve 'Folder ID' failed. [" + objData.name + "]");
            return false;
        }

        var folderId = wsResult.Results[0].ID;
        addOutput(wsResult.Status + " : Retrieve 'Folder ID' success. [" + objData.name + " | " + folderId + "]");

        return folderId;
    }

    /**
     * Helper function to enable the Browser console.log
     * method in SSJS scripts.
     */
    function console() {

        if(env == "dev" || debugMode == "true") {

            var args = Platform.Function.Stringify(Array.from(arguments));

            this.log = function() {
                Write("<script>console.log.apply(console," + args + ")<\/script>");
            };

            this.error = function() {
                Write("<script>console.error.apply(console," + args + ")<\/script>");
            };
        }
    }

    /**
     * Add an item to the Global Output Object
     * 
     * @param String strOutputItem The Output Line Item to add
     * @return void
     */
    function addOutput(strOutputItem) {
        gblOutput.push(strOutputItem);
    }
</script>