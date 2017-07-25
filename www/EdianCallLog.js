var EdianCallLog  = 
{

    onCall: function(successCallback, errorCallback) 
    {
        console.log("Edian: Calling call log");
        errorCallback = errorCallback || this.errorCallback;
        cordova.exec(successCallback, errorCallback, 'EdianCallLog', 'onCall', []);
    },

    errorCallback: function() 
    {
        console.log("WARNING: error EdianCallLog not implemented");
    }

};

module.exports = EdianCallLog;
