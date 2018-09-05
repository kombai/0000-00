ClassRef.UIWebView = {"[:]":"UIView : UIResponder : NSObject","[.]":{"allowsInlineMediaPlayback":{"abs":"A Boolean value that determines whether HTML5 videos play inline or use the native full-screen controller.","dec":"@property(nonatomic) BOOL allowsInlineMediaPlayback"},"canGoBack":{"abs":"A Boolean value indicating whether the receiver can move backward. (read-only)","dec":"@property(nonatomic, readonly, getter=canGoBack) BOOL canGoBack"},"canGoForward":{"abs":"A Boolean value indicating whether the receiver can move forward. (read-only)","dec":"@property(nonatomic, readonly, getter=canGoForward) BOOL canGoForward"},"dataDetectorTypes":{"abs":"The types of data converted to clickable URLs in the web view’s content.","dec":"@property(nonatomic) UIDataDetectorTypes dataDetectorTypes"},"delegate":{"abs":"The receiver’s delegate.","dec":"@property(nonatomic, assign) id<UIWebViewDelegate> delegate"},"gapBetweenPages":{"abs":"The size of the gap, in points, between pages.","dec":"@property(nonatomic) CGFloat gapBetweenPages"},"keyboardDisplayRequiresUserAction":{"abs":"A Boolean value indicating whether web content can programmatically display the keyboard.","dec":"@property(nonatomic) BOOL keyboardDisplayRequiresUserAction"},"loading":{"abs":"A Boolean value indicating whether the receiver is done loading content. (read-only)","dec":"@property(nonatomic, readonly, getter=isLoading) BOOL loading"},"mediaPlaybackAllowsAirPlay":{"abs":"A Boolean value that determines whether Air Play is allowed from this view.","dec":"@property(nonatomic) BOOL mediaPlaybackAllowsAirPlay"},"mediaPlaybackRequiresUserAction":{"abs":"A Boolean value that determines whether HTML5 videos can play automatically or require the user to start playing them.","dec":"@property(nonatomic) BOOL mediaPlaybackRequiresUserAction"},"pageCount":{"abs":"The number of pages produced by the layout of the web view. (read-only)","dec":"@property(nonatomic, readonly) NSUInteger pageCount"},"pageLength":{"abs":"The size of each page, in points, in the direction that the pages flow.","dec":"@property(nonatomic) CGFloat pageLength"},"paginationBreakingMode":{"abs":"The manner in which column- or page-breaking occurs.","dec":"@property(nonatomic) UIWebPaginationBreakingMode paginationBreakingMode"},"paginationMode":{"abs":"The layout of content in the web view.","dec":"@property(nonatomic) UIWebPaginationMode paginationMode"},"request":{"abs":"The URL request identifying the location of the content to load. (read-only)","dec":"@property(nonatomic, readonly, retain) NSURLRequest *request"},"scalesPageToFit":{"abs":"A Boolean value determining whether the webpage scales to fit the view and the user can change the scale.","dec":"@property(nonatomic) BOOL scalesPageToFit"},"scrollView":{"abs":"The scroll view associated with the web view. (read-only)","dec":"@property(nonatomic, readonly, retain) UIScrollView *scrollView"},"suppressesIncrementalRendering":{"abs":"A Boolean value indicating whether the web view suppresses content rendering until it is fully loaded into memory.","dec":"@property(nonatomic) BOOL suppressesIncrementalRendering"}},"[-]":{"goBack":{"abs":"Loads the previous location in the back-forward list.","dec":"- (void)goBack"},"goForward":{"abs":"Loads the next location in the back-forward list.","dec":"- (void)goForward"},"loadData:MIMEType:textEncodingName:baseURL:":{"abs":"Sets the main page contents, MIME type, content encoding, and base URL.","dec":"- (void)loadData:(NSData *)data MIMEType:(NSString *)MIMEType textEncodingName:(NSString *)encodingName baseURL:(NSURL *)baseURL"},"loadHTMLString:baseURL:":{"abs":"Sets the main page content and base URL.","dec":"- (void)loadHTMLString:(NSString *)string baseURL:(NSURL *)baseURL"},"loadRequest:":{"abs":"Connects to a given URL by initiating an asynchronous client request.","dec":"- (void)loadRequest:(NSURLRequest *)request"},"reload":{"abs":"Reloads the current page.","dec":"- (void)reload"},"stopLoading":{"abs":"Stops the loading of any web content managed by the receiver.","dec":"- (void)stopLoading"},"stringByEvaluatingJavaScriptFromString:":{"abs":"Returns the result of running a script.","dec":"- (NSString *)stringByEvaluatingJavaScriptFromString:(NSString *)script"}},"[=]":{"UIWebViewNavigationTypeLinkClicked":"","UIWebViewNavigationTypeFormSubmitted":"","UIWebViewNavigationTypeBackForward":"","UIWebViewNavigationTypeReload":"","UIWebViewNavigationTypeFormResubmitted":"","UIWebViewNavigationTypeOther":"","UIWebPaginationBreakingModePage":"","UIWebPaginationBreakingModeColumn":"","UIWebPaginationModeUnpaginated":"","UIWebPaginationModeLeftToRight":"","UIWebPaginationModeTopToBottom":"","UIWebPaginationModeBottomToTop":"","UIWebPaginationModeRightToLeft":""}};