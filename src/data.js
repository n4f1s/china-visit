export const RATE = 18.4;
export const photos = {
 hero:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=2200&q=85',
 kunming:'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80',
 guangzhou:'https://images.unsplash.com/photo-1513415564515-763d91423bdd?auto=format&fit=crop&w=1200&q=80',
 shenzhen:'https://images.unsplash.com/photo-1507992781348-310259076fe0?auto=format&fit=crop&w=1200&q=80',
 beijing:'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
 palace:'https://images.unsplash.com/photo-1510332981392-36692ea3a195?auto=format&fit=crop&w=1200&q=80',
 market:'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
 air:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
 city:'https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1200&q=80',
 tech:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
 park:'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
 river:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=80',
};
const stop=(time,title,desc,cost=0,tag='Explore',link='')=>({time,title,desc,cost,tag,link});
export const days=[
 {id:1,date:'MON · OCT 26',short:'26 Oct',city:'Kunming',title:'An unexpected first night',subtitle:'The layover becomes a little adventure.',image:'kunming',tone:'Transit + optional night city walk',blocks:[
 stop('14:00 BD','Take off from Dhaka','China Eastern MU2036. Arrive at the airport at least 3 hours early.',0,'Confirmed'),
 stop('18:20 CN','Land in Kunming','Immigration, bags, and finding the city-bound transfer can take 60–120+ minutes. China time is 2 hours ahead of Bangladesh.',0,'Confirmed'),
 stop('20:00–20:45','Go downtown — only if cleared quickly','Taxi/ride-hail to Nanping Pedestrian Street / Nanqiang Night Market. Allow ~45–70 minutes each direction; traffic can change this.',70,'Conditional'),
 stop('21:00–01:00','After-dark city walk','Start at Nanping Street and Nanqiang area; photograph streets and find a late-opening restaurant. Many markets will have closed well before midnight. Green Lake after midnight is a quiet scenic option, not a lively attraction.',75,'Optional'),
 stop('01:00–02:30','Return to KMG airport','Target to be back by around 02:30–03:00. Prearrange a reliable late-night taxi; do not count on late-night metro. If you get out late or feel tired, head back earlier.',70,'Buffer'),
 ],dayCost:[120,260],notes:['This city outing is optional, NOT guaranteed. Exit depends on Chinese immigration, visa entry, luggage and whether your transit arrangements allow it.','There is no sightseeing plan for the return layover on November 5: it is only 80 minutes.','Check whether the airport offers secure luggage storage. Do not assume bags are checked through.']},
 {id:2,date:'TUE · OCT 27',short:'27 Oct',city:'Guangzhou',title:'The city of lights',subtitle:'Land, settle in, then watch Canton Tower glow.',image:'guangzhou',tone:'Arrival · skyline',blocks:[
 stop('08:10–10:05','Fly KMG → Guangzhou','China Eastern MU5731, arrival Guangzhou T3.',0,'Confirmed'),
 stop('10:05–13:00','Airport → hotel','Metro or taxi, drop luggage; stay around Gongyuanqian / Beijing Road for easier budget touring.',45,'Transit'),
 stop('13:00–14:00','Lunch and reset','Try local Cantonese food; budget for a simple sit-down lunch.',35,'Food'),
 stop('14:30–17:00','Choose: Canton Fair or old town','Phase 2 ends today. Only attempt if buyer registration/badge and time allow; otherwise visit Chen Clan Ancestral Hall.',35,'Choose'),
 stop('18:00–21:00','Huacheng Square + Canton Tower','Enjoy the illuminated skyline and Pearl River promenade; optional tower entry costs extra.',40,'Sightseeing'),
 ],dayCost:[130,260],notes:['Canton Fair Phase 2 officially finishes 27 Oct. Electronics Phase 1 has already ended.','Keep this first day flexible due to the overnight connection.']},
 {id:3,date:'WED · OCT 28',short:'28 Oct',city:'Guangzhou',title:'Streets with a story',subtitle:'Historic enclaves, shopfronts and the riverside.',image:'city',tone:'Heritage · shopping',blocks:[
 stop('08:30–10:00','Chen Clan Ancestral Hall','Heritage complex, decorative architecture; check onsite hours.',25,'Sightseeing'),
 stop('10:30–12:30','Shamian Island','Walk the tree-lined historic streets, photography.',0,'Sightseeing'),
 stop('12:30–14:00','Lunch + Yongqing Fang','Walk and eat in Liwan’s historic neighborhood.',45,'Food'),
 stop('14:30–17:00','OneLink / Yide Road wholesale research','Small gifts, packaging, accessories; take notes and compare MOQ and delivery options.',30,'Sourcing'),
 stop('18:00–21:00','Beijing Road pedestrian street','Dinner, street photography, shopping.',70,'Explore')],dayCost:[140,250],notes:['When sourcing, ask for export MOQ, sample rate, payment terms and verified business license.','Product purchases are NOT included in trip budget.']},
 {id:4,date:'THU · OCT 29',short:'29 Oct',city:'Guangzhou',title:'Green above the skyline',subtitle:'Nature in the morning, sourcing in the afternoon.',image:'park',tone:'Nature · sourcing',blocks:[
 stop('08:00–11:30','Baiyun Mountain','Scenic pathways and mountain views; cable car is optional.',45,'Nature'),
 stop('12:00–13:00','Lunch','Return toward central Guangzhou.',35,'Food'),
 stop('14:00–17:30','Focused sourcing route','Choose beauty/accessories/garments/packaging markets based on your product interest. This is research, not pressure to buy.',35,'Sourcing'),
 stop('18:30–20:30','Dinner and pack','Stay close to a metro connection for tomorrow’s rail trip.',65,'Explore')],dayCost:[130,250],notes:['If you prefer more sightseeing, swap the markets for Yuexiu Park and the Five Rams statue.']},
 {id:5,date:'FRI · OCT 30',short:'30 Oct',city:'Shenzhen',title:'A city built tomorrow',subtitle:'Fast trains, dazzling towers and tech marketplaces.',image:'shenzhen',tone:'Intercity rail · tech',blocks:[
 stop('07:45–09:00','Hotel → Guangzhou South','Leave ample time for metro, station security and passport verification.',15,'Transit'),
 stop('09:30–10:30','High-speed train to Shenzhen North','Illustrative window only: book an actual train time in 12306/Trip.com.',95,'Book'),
 stop('11:00–13:00','Hotel + lunch near Huaqiangbei','Drop luggage; choose Huaqiangbei or Futian subway-accessible hotel.',55,'Food'),
 stop('13:00–17:30','Huaqiangbei electronics district','Compare gadgets, chargers, accessories, electronics components, suppliers.',20,'Sourcing'),
 stop('18:30–21:00','Lianhuashan Park / Futian skyline','Walk, sunset if timing allows and skyline photographs.',45,'Sightseeing')],dayCost:[210,340],notes:['Shenzhen’s most useful location for your plans: Huaqiangbei metro / Huaqiang Road; compare with Futian CBD for hotel value.']},
 {id:6,date:'SAT · OCT 31',short:'31 Oct',city:'Shenzhen',title:'The maker’s playground',subtitle:'Phones, hardware and a waterfront sunset.',image:'tech',tone:'Sourcing · Apple · seaside',blocks:[
 stop('09:30–12:30','Deep dive: Huaqiangbei','Compare 3–5 suppliers; ask about genuine vs refurb devices and written terms.',35,'Sourcing'),
 stop('12:30–14:00','Lunch + official Apple Store check','Compare mainland China model specs, payment method, warranty, and invoice before purchase.',40,'Research'),
 stop('14:00–17:30','Shenzhen Bay Park OR Window of the World','Waterfront is low-cost; theme park is an optional higher-priced alternative.',40,'Choose'),
 stop('18:30–21:30','Sea World in Shekou','Waterfront atmosphere, dinner, night photography.',80,'Explore')],dayCost:[160,350],notes:['Phone purchases are separate from trip costs.','Ask Apple to confirm current mainland model SIM/eSIM support for use in Bangladesh and Apple warranty service limitations.']},
 {id:7,date:'SUN · NOV 1',short:'01 Nov',city:'Beijing',title:'Northbound',subtitle:'Fly to the capital, then slow down.',image:'air',tone:'Domestic flight · Beijing',blocks:[
 stop('07:00–09:00','Hotel → Shenzhen airport','Choose a flight leaving around 09:00–12:00 if prices permit. Flight has NOT been purchased.',50,'Plan'),
 stop('09:00–15:00','Shenzhen → Beijing','A nonstop flight usually lasts 3–3.5 hours plus airport time. Arrival airport may be PEK or PKX.',900,'Book'),
 stop('15:00–17:00','Transfer to hotel','Stay near Qianmen / Zhushikou / Wangfujing metro for core attractions.',60,'Transit'),
 stop('18:00–20:30','Temple-side streets / local dinner','Keep the first evening easy; optional Olympic Park exterior if energy allows.',75,'Explore')],dayCost:[900,1450],notes:['Domestic flight fare is a placeholder, not booked. The actual date, airport and baggage limits must be confirmed.','Avoid scheduling any timed-entry Beijing sight on arrival day.']},
 {id:8,date:'MON · NOV 2',short:'02 Nov',city:'Beijing',title:'Beijing beyond the gates',subtitle:'Temple of Heaven and the city’s old lanes.',image:'palace',tone:'Culture · hutongs',blocks:[
 stop('08:30–11:00','Temple of Heaven','Early visit; verify combination ticket and opening hours.',35,'Sightseeing'),
 stop('11:00–13:00','Qianmen Street and lunch','Walk historic commercial streets.',50,'Explore'),
 stop('14:00–17:30','Shichahai / Houhai / hutongs','Lakeside walk and atmospheric alleyways; optional rickshaw separate.',20,'Sightseeing'),
 stop('18:00–20:00','Dinner and warm clothes prep','Great Wall tomorrow. Shop for gloves if needed.',65,'Prep')],dayCost:[130,260],notes:['Forbidden City is generally closed on Mondays; it is scheduled for Nov 4 instead.']},
 {id:9,date:'TUE · NOV 3',short:'03 Nov',city:'Beijing',title:'The wall that changed the world',subtitle:'One full day for the Great Wall.',image:'beijing',tone:'Highlight · all-day trip',blocks:[
 stop('06:45–08:00','Breakfast and depart','Book a reputable shared Mutianyu shuttle / guided transfer in advance.',35,'Transit'),
 stop('09:00–13:00','Mutianyu Great Wall','Walk the watchtowers; cable car/chairlift and toboggan optional. Autumn weather can be cold.',150,'Highlight'),
 stop('13:00–15:30','Return to Beijing','Estimated return varies by traffic and your tour.',130,'Transit'),
 stop('17:00–20:00','Dinner + night walk','Recover. Keep evening flexible.',75,'Explore')],dayCost:[280,480],notes:['Standard wall admission is about ¥45; tour, shuttle, cable car and meals cost extra.','Weather and crowding may require swapping this day with Nov 2 or Nov 4, subject to palace bookings.']},
 {id:10,date:'WED · NOV 4',short:'04 Nov',city:'Beijing',title:'Imperial farewell',subtitle:'A morning in the Forbidden City, then position for home.',image:'palace',tone:'Palace · final night near PKX',blocks:[
 stop('07:30–09:00','Breakfast + Tiananmen area','Entry restrictions / reservations may apply. Do not assume unreserved access.',30,'Transit'),
 stop('09:00–12:30','Forbidden City / Palace Museum','Reserve passport-linked admission in advance; check opening and entry slots.',40,'Book'),
 stop('12:30–14:30','Jingshan Park + lunch','Classic overhead palace panorama and lunch.',50,'Sightseeing'),
 stop('15:00–17:30','Collect luggage and transfer toward PKX','Move to Daxing Airport / airport shuttle hotel — not a downtown hotel tonight.',75,'Transit'),
 stop('18:00–20:00','Dinner + early night','Ask hotel about reliable 04:30 airport drop-off (prefer written confirmation).',55,'Prep')],dayCost:[200,360],notes:['Last night: prioritize a PKX airport-area hotel with confirmed very-early airport shuttle/taxi.','Do not rely on the first Airport Express train for a 07:10 flight.']},
 {id:11,date:'THU · NOV 5',short:'05 Nov',city:'Homebound',title:'Bringing it home',subtitle:'The final boarding pass, and a thousand photographs.',image:'air',tone:'Return flight · protected connection check',blocks:[
 stop('04:20–05:00','Arrive at Beijing Daxing (PKX)','Exact departure from hotel depends on confirmed transfer and distance.',35,'Critical'),
 stop('07:10–10:35','PKX → Kunming','China Eastern MU5720.',0,'Confirmed'),
 stop('10:35–11:55','Kunming connection — DO NOT EXIT','Only 1h20m. Follow transfer instructions directly. No sightseeing.',0,'Critical'),
 stop('11:55–13:00 BD','Kunming → Dhaka','China Eastern MU2035. Arrival 13:00 Bangladesh time.',0,'Confirmed')],dayCost:[35,90],notes:['Get written airline confirmation of the 80-minute transfer, through-checked baggage, and protected connection.']},
];
export const hotels=[
 {city:'Kunming',nights:'0 nights (26 Oct)',area:'Not booked — city outing only',cost:'¥0',why:'Do not book a downtown hotel if your plan is to explore and come back to the airport. Airport storage / transfer rules must be checked.',avoid:'Do not leave luggage unattended.'},
 {city:'Guangzhou',nights:'3 nights · 27–30 Oct',area:'Gongyuanqian / Beijing Road metro',cost:'¥280–430 / room / night',why:'Central, food-rich, convenient for historic sightseeing and train-station connections; better budget fit than luxury Zhujiang New Town.',avoid:'Canton Fair hotel demand may increase rates. Pick reviews mentioning foreign-passport check-in.'},
 {city:'Shenzhen',nights:'2 nights · 30 Oct–1 Nov',area:'Huaqiangbei / Huaqiang Road metro',cost:'¥280–430 / room / night',why:'Walkable to electronics sourcing; direct metro access to Futian and other sights.',avoid:'Avoid unreviewed basement rooms or places far from metro.'},
 {city:'Beijing',nights:'3 nights · 1–4 Nov',area:'Qianmen / Zhushikou metro',cost:'¥310–480 / room / night',why:'Excellent base for Forbidden City, Temple of Heaven, hutongs and inexpensive food.',avoid:'Do not book too far from metro; Beijing trips take longer than they look.'},
 {city:'Beijing PKX',nights:'1 night · 4–5 Nov',area:'Daxing Airport terminal / confirmed early shuttle hotel',cost:'¥250–420 / room / night',why:'You must reach PKX around 04:30–05:00 for the 07:10 departure. Reliable early transport is worth more than a cheaper downtown room.',avoid:'Check shuttle earliest run in writing — do not assume 24-hour shuttle.'}
];
export const options=[
 {id:'km',title:'Kunming at night',subtitle:'Decision at 20:00, 26 Oct',a:{name:'Downtown night walk',price:[120,260],time:'3–4 hours total available',good:'Best for a first taste of Yunnan nightlife',bad:'Higher transfer and immigration risk'},b:{name:'Airport-area fallback',price:[40,130],time:'Flexible',good:'Low risk if immigration, traffic, bags run late',bad:'Less memorable'},rule:'Exit only if you are landside by roughly 20:00, baggage is secured, and reliable late-night return transport is confirmed.'},
 {id:'train',title:'Guangzhou → Shenzhen',subtitle:'30 October',a:{name:'High-speed rail',price:[75,110],time:'~0.5–1 hour rail + station time',good:'Best default: fast, frequent, convenient',bad:'Guangzhou South is outside central Guangzhou'},b:{name:'Intercity / slower rail',price:[65,115],time:'~1–2 hours plus transfers',good:'May depart from a more convenient station',bad:'Varies considerably by station pair'},rule:'Check exact station names. Guangzhou South → Shenzhen North is NOT the same trip as Guangzhou East → Shenzhen.'},
 {id:'bj',title:'Shenzhen → Beijing',subtitle:'1 November',a:{name:'Direct flight',price:[650,1200],time:'~3–3.5h air + airport transfers',good:'Save half a day for sightseeing',bad:'Checked-bag rules, fare changes, airport transfers'},b:{name:'High-speed train',price:[900,1150],time:'~8–11 hours plus stations',good:'Downtown-to-downtown, better scenery',bad:'Uses almost your entire day'},rule:'Flight recommended unless actual airfare is much higher. Both options are still unbooked.'},
 {id:'wall',title:'Getting to the Great Wall',subtitle:'3 November',a:{name:'Shared shuttle / tour',price:[150,300],time:'~8–10 hours door-to-door',good:'Best practical balance for first-time visitors',bad:'Fixed departure / possible add-on fees'},b:{name:'Public bus + transfers',price:[80,170],time:'~9–12 hours',good:'Usually cheaper',bad:'More navigation, waiting and less wall time'},rule:'Entrance ¥45 and optional cable car are not necessarily included in transport quotes.'},
 {id:'park',title:'Shenzhen afternoon',subtitle:'31 October',a:{name:'Shenzhen Bay Park',price:[0,30],time:'2–3 hours',good:'Low cost, photo-friendly, flexible',bad:'Weather-sensitive'},b:{name:'Window of the World',price:[200,280],time:'4–6 hours',good:'Full theme-park experience',bad:'High admission, eats into sourcing time'},rule:'Choose once you know how long electronics sourcing takes.'}
];
export const checklist=[
 {cat:'Must confirm',txt:'China visa validity, entry allowance and travel documents for both travelers'},
 {cat:'Must confirm',txt:'Kunming landside exit permission, baggage transfer and airport re-entry deadline'},
 {cat:'Must confirm',txt:'Return KMG 80-minute transfer protected by China Eastern; checked bags transfer'},
 {cat:'Book',txt:'Shenzhen → Beijing on 1 November (airport and baggage allowance)'},
 {cat:'Book',txt:'3 Guangzhou nights; verify foreign passport accommodation'},
 {cat:'Book',txt:'2 Shenzhen nights near Huaqiangbei metro'},
 {cat:'Book',txt:'3 central Beijing nights + final night near PKX'},
 {cat:'Book',txt:'Forbidden City entrance with matching passport details'},
 {cat:'Book',txt:'Mutianyu Great Wall shuttle / excursion'},
 {cat:'Practical',txt:'Set up Alipay and WeChat Pay; carry backup payment and emergency cash'},
 {cat:'Practical',txt:'China-compatible connectivity, offline maps, translation, power banks'},
 {cat:'Practical',txt:'Validate roaming, maps, and access to services before leaving Bangladesh'},
 {cat:'Practical',txt:'Packing for cold Beijing autumn and warmer Guangzhou/Shenzhen'},
 {cat:'Shopping',txt:'Check Apple Store stock and mainland model SIM/eSIM compatibility'},
 {cat:'Shopping',txt:'Check Bangladesh customs rules and duty before buying a phone'},
 {cat:'Shopping',txt:'Prepare supplier shortlist and sample checklist; do not prepay strangers'},
];
export const sources=[
 ['Your confirmed ticket','Issued China Eastern itinerary, PNR JDCJBX · 14 Oct 2026','Personal booking details; flights are confirmed, hotel and domestic travel are not.'],
 ['Canton Fair','https://www.cantonfair.org.cn/en-US','Official fair calendar and buyer registration'],
 ['Apple China — phones','https://www.apple.com.cn/shop/buy-iphone','Official current model lineup and pricing; check stock'],
 ['Apple China — retail stores','https://www.apple.com.cn/retail/','Official Apple Store locations'],
 ['China Railway 12306','https://www.12306.cn/en/index.html','Train times and bookings'],
 ['Palace Museum tickets','https://ticket.dpm.org.cn/','Official Forbidden City booking'],
 ['China Eastern','https://www.ceair.com/','Transfers, through baggage and airport check-in'],
 ['Trip.com','https://www.trip.com/','Compare hotels, flights and tours; quotes are dynamic'],
 ['Bangladesh Customs','https://customs.gov.bd/','Confirm current arrival allowances and duties'],
];
