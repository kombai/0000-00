ClassRef["NSTimeZone"] = {"[:]":"NSObject","[+]":{"abbreviationDictionary":{"abs":"Returns a dictionary holding the mappings of time zone abbreviations to time zone names.","dec":"+ (NSDictionary *)abbreviationDictionary"},"defaultTimeZone":{"abs":"Returns the default time zone for the current application.","dec":"+ (NSTimeZone *)defaultTimeZone"},"knownTimeZoneNames":{"abs":"Returns an array of strings listing the IDs of all the time zones known to the system.","dec":"+ (NSArray *)knownTimeZoneNames"},"localTimeZone":{"abs":"Returns an object that forwards all messages to the default time zone for the current application.","dec":"+ (NSTimeZone *)localTimeZone"},"resetSystemTimeZone":{"abs":"Resets the system time zone object cached by the application, if any.","dec":"+ (void)resetSystemTimeZone"},"setAbbreviationDictionary:":{"abs":"Sets the abbreviation dictionary to the specified dictionary.","dec":"+ (void)setAbbreviationDictionary:(NSDictionary *)dict"},"setDefaultTimeZone:":{"abs":"Sets the default time zone for the current application to a given time zone.","dec":"+ (void)setDefaultTimeZone:(NSTimeZone *)aTimeZone"},"systemTimeZone":{"abs":"Returns the time zone currently used by the system.","dec":"+ (NSTimeZone *)systemTimeZone"},"timeZoneDataVersion":{"abs":"Returns the time zone data version.","dec":"+ (NSString *)timeZoneDataVersion"},"timeZoneForSecondsFromGMT:":{"abs":"Returns a time zone object offset from Greenwich Mean Time by a given number of seconds.","dec":"+ (id)timeZoneForSecondsFromGMT:(NSInteger)seconds"},"timeZoneWithAbbreviation:":{"abs":"Returns the time zone object identified by a given abbreviation.","dec":"+ (id)timeZoneWithAbbreviation:(NSString *)abbreviation"},"timeZoneWithName:":{"abs":"Returns the time zone object identified by a given ID.","dec":"+ (id)timeZoneWithName:(NSString *)tzName"},"timeZoneWithName:data:":{"abs":"Returns the time zone with a given ID whose data has been initialized using given data,","dec":"+ (id)timeZoneWithName:(NSString *)tzName data:(NSData *)data"}},"[-]":{"abbreviation":{"abs":"Returns the abbreviation for the receiver.","dec":"- (NSString *)abbreviation"},"abbreviationForDate:":{"abs":"Returns the abbreviation for the receiver at a given date.","dec":"- (NSString *)abbreviationForDate:(NSDate *)aDate"},"data":{"abs":"Returns the data that stores the information used by the receiver.","dec":"- (NSData *)data"},"daylightSavingTimeOffset":{"abs":"Returns the current daylight saving time offset of the receiver.","dec":"- (NSTimeInterval)daylightSavingTimeOffset"},"daylightSavingTimeOffsetForDate:":{"abs":"Returns the daylight saving time offset for a given date.","dec":"- (NSTimeInterval)daylightSavingTimeOffsetForDate:(NSDate *)aDate"},"description":{"abs":"Returns the description of the receiver.","dec":"- (NSString *)description"},"initWithName:":{"abs":"Returns a time zone initialized with a given ID.","dec":"- (id)initWithName:(NSString *)tzName"},"initWithName:data:":{"abs":"Initializes a time zone with a given ID and time zone data.","dec":"- (id)initWithName:(NSString *)tzName data:(NSData *)data"},"isDaylightSavingTime":{"abs":"Returns a Boolean value that indicates whether the receiver is currently using daylight saving time.","dec":"- (BOOL)isDaylightSavingTime"},"isDaylightSavingTimeForDate:":{"abs":"Returns a Boolean value that indicates whether the receiver uses daylight savings time at a given date.","dec":"- (BOOL)isDaylightSavingTimeForDate:(NSDate *)aDate"},"isEqualToTimeZone:":{"abs":"Returns a Boolean value that indicates whether the receiver has the same name and data as another given time zone.","dec":"- (BOOL)isEqualToTimeZone:(NSTimeZone *)aTimeZone"},"localizedName:locale:":{"abs":"Returns the name of the receiver localized for a given locale.","dec":"- (NSString *)localizedName:(NSTimeZoneNameStyle)style locale:(NSLocale *)locale"},"name":{"abs":"Returns the geopolitical region ID that identifies the receiver.","dec":"- (NSString *)name"},"nextDaylightSavingTimeTransition":{"abs":"Returns the date of the next daylight saving time transition for the receiver.","dec":"- (NSDate *)nextDaylightSavingTimeTransition"},"nextDaylightSavingTimeTransitionAfterDate:":{"abs":"Returns the next daylight saving time transition after a given date.","dec":"- (NSDate *)nextDaylightSavingTimeTransitionAfterDate:(NSDate *)aDate"},"secondsFromGMT":{"abs":"Returns the current difference in seconds between the receiver and Greenwich Mean Time.","dec":"- (NSInteger)secondsFromGMT"},"secondsFromGMTForDate:":{"abs":"Returns the difference in seconds between the receiver and Greenwich Mean Time at a given date.","dec":"- (NSInteger)secondsFromGMTForDate:(NSDate *)aDate"}},"[=]":{"NSTimeZoneNameStyleStandard":"","NSTimeZoneNameStyleShortStandard":"","NSTimeZoneNameStyleDaylightSaving":"","NSTimeZoneNameStyleShortDaylightSaving":"","NSTimeZoneNameStyleGeneric":"","NSTimeZoneNameStyleShortGeneric":""}};