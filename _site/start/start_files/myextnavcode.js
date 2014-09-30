

var g_httpCgiUrl = "/web/idcplg?IdcService=SS_GET_PAGE&";
var _U = "undefined";

/////////////////////////////////////////////////////////////////////////////
// Function : isTrue
// Comments :
/////////////////////////////////////////////////////////////////////////////
function isTrue( boolStr )
{
	if( boolStr.length > 0 )
	{
		var boolChar = boolStr.substring(0,1).toUpperCase();
		if( ( boolChar == '1' ) || ( boolChar == 'T' ) )
		{
			return true;
		}
	}

	return false;
}

/////////////////////////////////////////////////////////////////////////////
// Function : link
// Comments :
/////////////////////////////////////////////////////////////////////////////
function link(dDocName,ssTargetNodeId,ssTargetSiteId)
{
	if ((dDocName.search("http://") != -1) || (dDocName.search("https://") != -1))
	{
		window.open(dDocName);
	}
	else if (dDocName.charAt(0) == '#')
        {
           window.location = window.location.href.split("#")[0] + dDocName;
        }
	else
	{
		var newUrl = "";
		newUrl += g_httpCgiUrl;
		newUrl += "ssDocName=" + dDocName;

		var currentUrl = "" + window.location;

		// Continue propagation of the "SSContributor" parameter
		if( SSContributor )
		{
			var paramName = "SSContributor=";
			var pos = currentUrl.indexOf( paramName );
			if( pos != -1 )
			{
				var subStr = currentUrl.substring( pos+paramName.length, pos+paramName.length+1 );
				if( isTrue( subStr ) )
				{
					newUrl += "&" + paramName + "true";
				}
			}
		}

		// Continue propagation of the "previewId" parameter
		var previewId = "previewId=";
		var posStart = currentUrl.indexOf( previewId );
		if( posStart != -1 )
		{
			var posEnd = currentUrl.indexOf("&", posStart);
			var value = "";
			if (posEnd == -1)
			{
				value = currentUrl.substring(posStart+previewId.length, currentUrl.length);
			}
			else
			{
				value = currentUrl.substring(posStart+previewId.length, posEnd);
			}
			newUrl += "&" + previewId + value;
		}

		// We now always add the node that the link is on as part of the URL also.
		if( typeof g_ssSourceNodeId != _U && g_ssSourceNodeId != null )
			newUrl += "&ssSourceNodeId=" + g_ssSourceNodeId;

		if( typeof g_ssSourceSiteId != _U && g_ssSourceSiteId != null )
			newUrl += "&ssSourceSiteId=" + g_ssSourceSiteId;

		// If we have a specific target nodeId then add that to the URL also
		if( typeof ssTargetNodeId != _U && ssTargetNodeId != null )
			newUrl += "&ssTargetNodeId=" + ssTargetNodeId;

		if( typeof ssTargetSiteId != _U && ssTargetSiteId != null )
			newUrl += "&ssTargetSiteId=" + ssTargetSiteId;

		if( typeof ssUrlPrefix != _U && ssUrlPrefix != null )
			newUrl += "&ssUrlPrefix=" + ssUrlPrefix;

		// Navigate to the new url
		window.location = newUrl;
	}
}

/////////////////////////////////////////////////////////////////////////////
// Function : nodelink
// Comments :
/////////////////////////////////////////////////////////////////////////////
function nodelink(nodeId,siteId)
{
	var newUrl = "";
	newUrl += g_httpCgiUrl;

	if (typeof nodeId != _U && nodeId != 0)
	{
		newUrl += "nodeId=" + nodeId;
	}

	if( typeof siteId != _U && siteId != null )
	{
		newUrl += "&siteId=" + siteId;
	}

	var currentUrl = "" + window.location;

	// Continue propagation of the "SSContributor" parameter
	if( SSContributor )
	{
		var paramName = "SSContributor=";
		var pos = currentUrl.indexOf( paramName );
		if( pos != -1 )
		{
			var subStr = currentUrl.substring( pos+paramName.length, pos+paramName.length+1 );
			if( isTrue( subStr ) )
			{
				newUrl += "&" + paramName + "true";
			}
		}
	}

	// Continue propagation of the "previewId" parameter
	var previewId = "previewId=";
	var posStart = currentUrl.indexOf( previewId );
	if( posStart != -1 )
	{
		var posEnd = currentUrl.indexOf("&", posStart);
		var value = "";
		if (posEnd == -1)
		{
			value = currentUrl.substring(posStart+previewId.length, currentUrl.length);
		}
		else
		{
			value = currentUrl.substring(posStart+previewId.length, posEnd);
		}
		newUrl += "&" + previewId + value;
	}

	// We now always add the node that the link is on as part of the URl also.
	if( typeof g_ssSourceNodeId != _U && g_ssSourceNodeId != null )
		newUrl += "&ssSourceNodeId=" + g_ssSourceNodeId;

	if( typeof g_ssSourceSiteId != _U && g_ssSourceSiteId != null )
		newUrl += "&ssSourceSiteId=" + g_ssSourceSiteId;

	if( typeof ssUrlPrefix != _U && ssUrlPrefix != null )
		newUrl += "&ssUrlPrefix=" + ssUrlPrefix;

	// Navigate to the new url
	window.location = newUrl;
}

