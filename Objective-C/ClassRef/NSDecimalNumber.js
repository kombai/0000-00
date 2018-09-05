ClassRef["NSDecimalNumber"] = {"[:]":"NSNumber : NSValue : NSObject","[+]":{"decimalNumberWithDecimal:":{"abs":"Creates and returns an NSDecimalNumber object equivalent to a given NSDecimal structure.","dec":"+ (NSDecimalNumber *)decimalNumberWithDecimal:(NSDecimal)decimal"},"decimalNumberWithMantissa:exponent:isNegative:":{"abs":"Creates and returns an NSDecimalNumber object equivalent to the number specified by the arguments.","dec":"+ (NSDecimalNumber *)decimalNumberWithMantissa:(unsigned long long)mantissa exponent:(short)exponent isNegative:(BOOL)isNegative"},"decimalNumberWithString:":{"abs":"Creates and returns an NSDecimalNumber object whose value is equivalent to that in a given numeric string.","dec":"+ (NSDecimalNumber *)decimalNumberWithString:(NSString *)numericString"},"decimalNumberWithString:locale:":{"abs":"Creates and returns an NSDecimalNumber object whose value is equivalent to that in a given numeric string, interpreted using a given locale.","dec":"+ (NSDecimalNumber *)decimalNumberWithString:(NSString *)numericString locale:(NSDictionary *)locale"},"defaultBehavior":{"abs":"Returns the way arithmetic methods, like decimalNumberByAdding:, round off and handle error conditions.","dec":"+ (id < NSDecimalNumberBehaviors >)defaultBehavior"},"maximumDecimalNumber":{"abs":"Returns the largest possible value of an NSDecimalNumber object.","dec":"+ (NSDecimalNumber *)maximumDecimalNumber"},"minimumDecimalNumber":{"abs":"Returns the smallest possible value of an NSDecimalNumber object.","dec":"+ (NSDecimalNumber *)minimumDecimalNumber"},"notANumber":{"abs":"Returns an NSDecimalNumber object that specifies no number.","dec":"+ (NSDecimalNumber *)notANumber"},"one":{"abs":"Returns an NSDecimalNumber object equivalent to the number 1.0.","dec":"+ (NSDecimalNumber *)one"},"setDefaultBehavior:":{"abs":"Specifies the way that arithmetic methods, like decimalNumberByAdding:, round off and handle error conditions.","dec":"+ (void)setDefaultBehavior:(id < NSDecimalNumberBehaviors >)behavior"},"zero":{"abs":"Returns an NSDecimalNumber object equivalent to the number 0.0.","dec":"+ (NSDecimalNumber *)zero"}},"[-]":{"compare:":{"abs":"Returns an NSComparisonResult value that indicates the numerical ordering of the receiver and another given NSDecimalNumber object.","dec":"- (NSComparisonResult)compare:(NSNumber *)decimalNumber"},"decimalNumberByAdding:":{"abs":"Returns a new NSDecimalNumber object whose value is the sum of the receiver and another given NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByAdding:(NSDecimalNumber *)decimalNumber"},"decimalNumberByAdding:withBehavior:":{"abs":"Adds decimalNumber to the receiver and returns the sum, a newly created NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByAdding:(NSDecimalNumber *)decimalNumber withBehavior:(id < NSDecimalNumberBehaviors >)behavior"},"decimalNumberByDividingBy:":{"abs":"Returns a new NSDecimalNumber object whose value is the value of the receiver divided by that of another given NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByDividingBy:(NSDecimalNumber *)decimalNumber"},"decimalNumberByDividingBy:withBehavior:":{"abs":"Divides the receiver by decimalNumber and returns the quotient, a newly created NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByDividingBy:(NSDecimalNumber *)decimalNumber withBehavior:(id < NSDecimalNumberBehaviors >)behavior"},"decimalNumberByMultiplyingBy:":{"abs":"Returns a new NSDecimalNumber object whose value is the value of the receiver multiplied by that of another given NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByMultiplyingBy:(NSDecimalNumber *)decimalNumber"},"decimalNumberByMultiplyingBy:withBehavior:":{"abs":"Multiplies the receiver by decimalNumber and returns the product, a newly created NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByMultiplyingBy:(NSDecimalNumber *)decimalNumber withBehavior:(id < NSDecimalNumberBehaviors >)behavior"},"decimalNumberByMultiplyingByPowerOf10:":{"abs":"Multiplies the receiver by 10^power and returns the product, a newly created NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByMultiplyingByPowerOf10:(short)power"},"decimalNumberByMultiplyingByPowerOf10:withBehavior:":{"abs":"Multiplies the receiver by 10^power and returns the product, a newly created NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByMultiplyingByPowerOf10:(short)power withBehavior:(id < NSDecimalNumberBehaviors >)behavior"},"decimalNumberByRaisingToPower:":{"abs":"Returns a new NSDecimalNumber object whose value is the value of the receiver raised to a given power.","dec":"- (NSDecimalNumber *)decimalNumberByRaisingToPower:(NSUInteger)power"},"decimalNumberByRaisingToPower:withBehavior:":{"abs":"Raises the receiver to power and returns the result, a newly created NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByRaisingToPower:(NSUInteger)power withBehavior:(id < NSDecimalNumberBehaviors >)behavior"},"decimalNumberByRoundingAccordingToBehavior:":{"abs":"Rounds the receiver off in the way specified by behavior and returns the result, a newly created NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberByRoundingAccordingToBehavior:(id < NSDecimalNumberBehaviors >)behavior"},"decimalNumberBySubtracting:":{"abs":"Returns a new NSDecimalNumber object whose value is that of another given NSDecimalNumber object subtracted from the value of the receiver.","dec":"- (NSDecimalNumber *)decimalNumberBySubtracting:(NSDecimalNumber *)decimalNumber"},"decimalNumberBySubtracting:withBehavior:":{"abs":"Subtracts decimalNumber from the receiver and returns the difference, a newly created NSDecimalNumber object.","dec":"- (NSDecimalNumber *)decimalNumberBySubtracting:(NSDecimalNumber *)decimalNumber withBehavior:(id < NSDecimalNumberBehaviors >)behavior"},"decimalValue":{"abs":"Returns the receiver’s value, expressed as an NSDecimal structure.","dec":"- (NSDecimal)decimalValue"},"descriptionWithLocale:":{"abs":"Returns a string, specified according to a given locale, that represents the contents of the receiver.","dec":"- (NSString *)descriptionWithLocale:(NSDictionary *)locale"},"doubleValue":{"abs":"Returns the approximate value of the receiver as a double.","dec":"- (double)doubleValue"},"initWithDecimal:":{"abs":"Returns an NSDecimalNumber object initialized to represent a given decimal.","dec":"- (id)initWithDecimal:(NSDecimal)decimal"},"initWithMantissa:exponent:isNegative:":{"abs":"Returns an NSDecimalNumber object initialized using the given mantissa, exponent, and sign.","dec":"- (id)initWithMantissa:(unsigned long long)mantissa exponent:(short)exponent isNegative:(BOOL)flag"},"initWithString:":{"abs":"Returns an NSDecimalNumber object initialized so that its value is equivalent to that in a given numeric string.","dec":"- (id)initWithString:(NSString *)numericString"},"initWithString:locale:":{"abs":"Returns an NSDecimalNumber object initialized so that its value is equivalent to that in a given numeric string, interpreted using a given locale.","dec":"- (id)initWithString:(NSString *)numericString locale:(NSDictionary *)locale"},"objCType":{"abs":"Returns a C string containing the Objective-C type of the data contained in the receiver, which for an NSDecimalNumber object is always “d” (for double).","dec":"- (const char *)objCType"}},"[=]":{"NSDecimalNumberExactnessException":"","NSDecimalNumberOverflowException":"","NSDecimalNumberUnderflowException":"","NSDecimalNumberDivideByZeroException":""}};