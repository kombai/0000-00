ClassRef["NSTimer"] = {"[:]":"NSObject","[+]":{"scheduledTimerWithTimeInterval:invocation:repeats:":{"abs":"Creates and returns a new NSTimer object and schedules it on the current run loop in the default mode.","dec":"+ (NSTimer *)scheduledTimerWithTimeInterval:(NSTimeInterval)seconds invocation:(NSInvocation *)invocation repeats:(BOOL)repeats"},"scheduledTimerWithTimeInterval:target:selector:userInfo:repeats:":{"abs":"Creates and returns a new NSTimer object and schedules it on the current run loop in the default mode.","dec":"+ (NSTimer *)scheduledTimerWithTimeInterval:(NSTimeInterval)seconds target:(id)target selector:(SEL)aSelector userInfo:(id)userInfo repeats:(BOOL)repeats"},"timerWithTimeInterval:invocation:repeats:":{"abs":"Creates and returns a new NSTimer object initialized with the specified invocation object.","dec":"+ (NSTimer *)timerWithTimeInterval:(NSTimeInterval)seconds invocation:(NSInvocation *)invocation repeats:(BOOL)repeats"},"timerWithTimeInterval:target:selector:userInfo:repeats:":{"abs":"Creates and returns a new NSTimer object initialized with the specified object and selector.","dec":"+ (NSTimer *)timerWithTimeInterval:(NSTimeInterval)seconds target:(id)target selector:(SEL)aSelector userInfo:(id)userInfo repeats:(BOOL)repeats"}},"[-]":{"fire":{"abs":"Causes the receiver’s message to be sent to its target.","dec":"- (void)fire"},"fireDate":{"abs":"Returns the date at which the receiver will fire.","dec":"- (NSDate *)fireDate"},"initWithFireDate:interval:target:selector:userInfo:repeats:":{"abs":"Initializes a new NSTimer object using the specified object and selector.","dec":"- (id)initWithFireDate:(NSDate *)date interval:(NSTimeInterval)seconds target:(id)target selector:(SEL)aSelector userInfo:(id)userInfo repeats:(BOOL)repeats"},"invalidate":{"abs":"Stops the receiver from ever firing again and requests its removal from its run loop.","dec":"- (void)invalidate"},"isValid":{"abs":"Returns a Boolean value that indicates whether the receiver is currently valid.","dec":"- (BOOL)isValid"},"setFireDate:":{"abs":"Resets the firing time of the receiver to the specified date.","dec":"- (void)setFireDate:(NSDate *)date"},"setTolerance:":{"abs":"Sets the amount of time after the scheduled fire date that the timer may fire to the given interval.","dec":"- (void)setTolerance:(NSTimeInterval)tolerance"},"timeInterval":{"abs":"Returns the receiver’s time interval.","dec":"- (NSTimeInterval)timeInterval"},"tolerance":{"abs":"Returns the amount of time after the scheduled fire date that the timer may fire.","dec":"- (NSTimeInterval)tolerance"},"userInfo":{"abs":"Returns the receiver's userInfo object.","dec":"- (id)userInfo"}}};