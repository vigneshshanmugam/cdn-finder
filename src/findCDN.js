var CDN_PROVIDER  = [
  [".clients.turbobytes.com", "Turbobytes"],
  [".akamai.net", "Akamai"],
  [".edgesuite.net","Akamai"],
  [".cdn.bitgravity.com", "Bitgravity"],
  [".akamaiedge.net", "Akamai"],
  [".llnwd.net", "Limelight"],
  [".systemcdn.net", "EdgeCast"],
  [".cdn77.net", "CDN77"],
  [".edgecastcdn.net", "EdgeCast"],
  [".hwcdn.net", "Highwinds"],
  [".panthercdn.com", "CDNetworks"],
  [".simplecdn.net", "Simple CDN"],
  [".instacontent.net", "Mirror Image"],
  [".mirror-image.net", "Mirror Image"],
  [".cap-mii.net", "Mirror Image"],
  [".footprint.net", "Level3"],
  [".ay1.b.yahoo.com", "Yahoo"],
  [".yimg.", "Yahoo"],
  [".google.", "Google"],
  ["googlesyndication.", "Google"],
  ["youtube.", "Google"],
  [".googleusercontent.com", "Google"],
  [".l.doubleclick.net", "Google"],
  [".internapcdn.net", "Internap"],
  [".cloudfront.net", "Amazon Cloudfront"],
  [".netdna-cdn.com", "MaxCDN"],
  [".netdna-ssl.com", "MaxCDN"],
  [".netdna.com", "MaxCDN"],
  [".cotcdn.net", "Cotendo"],
  [".cachefly.net", "Cachefly"],
  ["bo.lt", "BO.LT"],
  [".cloudflare.com", "Cloudflare"],
  [".afxcdn.net", "afxcdn.net"],
  [".lxdns.com", "ChinaNetCenter"],
  [".att-dsa.net", "AT&T"],
  [".vo.msecnd.net", "Windows Azure"],
  [".voxcdn.net", "Voxel"],
  [".bluehatnetwork.com", "Blue Hat Network"],
  [".swiftcdn1.com", "SwiftCDN"],
  [".rncdn1.com", "Reflected Networks"],
  [".cdngc.net", "CDNetworks"],
  [".gccdn.net", "CDNetworks"],
  [".gccdn.cn", "CDNetworks"],
  [".fastly.net", "Fastly"],
  [".gslb.taobao.com", "Taobao"],
  [".gslb.tbcache.com", "Alimama"],
  [".ccgslb.com", "ChinaCache"],
  [".ccgslb.net", "ChinaCache"],
  [".c3cache.net", "ChinaCache"],
  [".chinacache.net", "ChinaCache"],
  [".c3cdn.net", "ChinaCache"],
  [".akadns.net", "Akamai"],
  [".cdn.telefonica.com", "Telefonica"],
  [".azioncdn.net", "Azion"],
  [".anankecdn.com.br", "Ananke"],
  [".kxcdn.com", "KeyCDN"],
  [".lswcdn.net", "LeaseWeb CDN"]
]

module.exports = function(cNames){
	var cdnName = null, cname;
	if(cNames.length){
		cname = cNames[0];
		for(var i=0; i < CDN_PROVIDER.length; i++){
			if(cname.indexOf(CDN_PROVIDER[i][0]) > 0){
				cdnName = CDN_PROVIDER[i][1];
				break;
			}
		}
	}
	return cdnName;
}