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
    Platform.Load("Core", "1.1");

    /** Load WSProxy **/
    var wsProxy = new Script.Util.WSProxy();

    /** Set Debug Mode **/
    var debugMode = Request.GetQueryStringParameter("debug");

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
     * Add an item to the Global Output Object
     * 
     * @param String strOutputItem The Output Line Item to add
     * @return void
     */
    function addOutput(strOutputItem) {
        gblOutput.push(strOutputItem);
    }
</script>