ClassRef["NSURLAuthenticationChallenge"] = {"[:]":"NSObject","[-]":{"error":{"abs":"Returns the NSError object representing the last authentication failure.","dec":"- (NSError *)error"},"failureResponse":{"abs":"Returns the NSURLResponse object representing the last authentication failure.","dec":"- (NSURLResponse *)failureResponse"},"initWithAuthenticationChallenge:sender:":{"abs":"Returns an initialized NSURLAuthenticationChallenge object copying the properties from challenge, and setting the authentication sender to sender.","dec":"- (id)initWithAuthenticationChallenge:(NSURLAuthenticationChallenge *)challenge sender:(id < NSURLAuthenticationChallengeSender >)sender"},"initWithProtectionSpace:proposedCredential:previousFailureCount:failureResponse:error:sender:":{"abs":"Returns an initialized NSURLAuthenticationChallenge object for the specified protection space, credential, failure count, server response, error, and sender.","dec":"- (id)initWithProtectionSpace:(NSURLProtectionSpace *)space proposedCredential:(NSURLCredential *)credential previousFailureCount:(NSInteger)count failureResponse:(NSURLResponse *)response error:(NSError *)error sender:(id < NSURLAuthenticationChallengeSender >)sender"},"previousFailureCount":{"abs":"Returns the receiver’s count of failed authentication attempts.","dec":"- (NSInteger)previousFailureCount"},"proposedCredential":{"abs":"Returns the proposed credential for this challenge.","dec":"- (NSURLCredential *)proposedCredential"},"protectionSpace":{"abs":"Returns the receiver’s protection space.","dec":"- (NSURLProtectionSpace *)protectionSpace"},"sender":{"abs":"Returns the receiver’s sender.","dec":"- (id < NSURLAuthenticationChallengeSender >)sender"}}};