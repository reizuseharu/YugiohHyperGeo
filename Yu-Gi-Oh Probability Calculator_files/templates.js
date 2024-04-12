var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var Templates = {
    cardType: function(count) {
        return `
                                <div class="form-group" id="card-type-${count}-container">
                                    <div class="col-xs-6">
                                        <input class="col-xs-6 form-control card-types-input card-types-name" id="card-type-${count}-name" placeholder="Card Name"/>
                                    </div>
                                    <div class="col-xs-2">
                                        <input type="text" class="form-control number-input card-types-amt" id="card-type-${count}-amt" placeholder="3">
                                    </div>
                                    <div class="col-xs-2">
                                        <input type="text" class="form-control number-input card-types-min" id="card-type-${count}-min" placeholder="1">
                                    </div>
                                    <div class="col-xs-2">
                                        <input type="text" class="form-control number-input card-types-max" id="card-type-${count}-max" placeholder="3">
                                    </div>
                                </div>
        `;
    }
    
};

}
/*
     FILE ARCHIVED ON 18:39:03 Apr 02, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:13:30 Apr 12, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.933
  exclusion.robots: 0.108
  exclusion.robots.policy: 0.095
  cdx.remote: 0.079
  esindex: 0.027
  LoadShardBlock: 107.16 (3)
  PetaboxLoader3.datanode: 149.531 (4)
  load_resource: 104.349
  PetaboxLoader3.resolve: 20.547
*/