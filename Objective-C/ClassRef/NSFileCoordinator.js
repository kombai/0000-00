ClassRef["NSFileCoordinator"] = {"[:]":"NSObject","[+]":{"addFilePresenter:":{"abs":"Registers the specified file presenter object so that it can receive notifications.","dec":"+ (void)addFilePresenter:(id < NSFilePresenter >)filePresenter"},"filePresenters":{"abs":"Returns an array containing the currently registered file presenter objects.","dec":"+ (NSArray *)filePresenters"},"removeFilePresenter:":{"abs":"Unregisters the specified file presenter object.","dec":"+ (void)removeFilePresenter:(id < NSFilePresenter >)filePresenter"}},"[-]":{"cancel":{"abs":"Cancels any active file coordination calls.","dec":"- (void)cancel"},"coordinateReadingItemAtURL:options:error:byAccessor:":{"abs":"Initiates a read operation on a single file or directory using the specified options.","dec":"- (void)coordinateReadingItemAtURL:(NSURL *)url options:(NSFileCoordinatorReadingOptions)options error:(NSError **)outError byAccessor:(void (^)(NSURL *newURL))reader"},"coordinateReadingItemAtURL:options:writingItemAtURL:options:error:byAccessor:":{"abs":"Initiates a read operation that contains a follow-up write operation.","dec":"- (void)coordinateReadingItemAtURL:(NSURL *)readingURL options:(NSFileCoordinatorReadingOptions)readingOptions writingItemAtURL:(NSURL *)writingURL options:(NSFileCoordinatorWritingOptions)writingOptions error:(NSError **)outError byAccessor:(void (^)(NSURL *newReadingURL, NSURL *newWritingURL))readerWriter"},"coordinateWritingItemAtURL:options:error:byAccessor:":{"abs":"Initiates a write operation on a single file or directory using the specified options.","dec":"- (void)coordinateWritingItemAtURL:(NSURL *)url options:(NSFileCoordinatorWritingOptions)options error:(NSError **)outError byAccessor:(void (^)(NSURL *newURL))writer"},"coordinateWritingItemAtURL:options:writingItemAtURL:options:error:byAccessor:":{"abs":"Initiates a write operation that involves a secondary write operation.","dec":"- (void)coordinateWritingItemAtURL:(NSURL *)url1 options:(NSFileCoordinatorWritingOptions)options1 writingItemAtURL:(NSURL *)url2 options:(NSFileCoordinatorWritingOptions)options2 error:(NSError **)outError byAccessor:(void (^)(NSURL *newURL1, NSURL *newURL2))writer"},"initWithFilePresenter:":{"abs":"Initializes and returns a file coordinator object using the specified file presenter.","dec":"- (id)initWithFilePresenter:(id < NSFilePresenter >)filePresenterOrNil"},"itemAtURL:didMoveToURL:":{"abs":"Notifies relevant file presenters that the location of a file or directory changed.","dec":"- (void)itemAtURL:(NSURL *)oldURL didMoveToURL:(NSURL *)newURL"},"itemAtURL:willMoveToURL:":{"abs":"Announces that your app is moving a file to a new URL.","dec":"- (void)itemAtURL:(NSURL *)oldURL willMoveToURL:(NSURL *)newURL"},"prepareForReadingItemsAtURLs:options:writingItemsAtURLs:options:error:byAccessor:":{"abs":"Prepare to read or write from multiple files in a single batch operation.","dec":"- (void)prepareForReadingItemsAtURLs:(NSArray *)readingURLs options:(NSFileCoordinatorReadingOptions)readingOptions writingItemsAtURLs:(NSArray *)writingURLs options:(NSFileCoordinatorWritingOptions)writingOptions error:(NSError **)outError byAccessor:(void)batchAccessor"}},"[=]":{"NSFileCoordinatorReadingWithoutChanges":"","NSFileCoordinatorReadingResolvesSymbolicLink":"","NSFileCoordinatorWritingForDeleting":"","NSFileCoordinatorWritingForReplacing":"","NSFileCoordinatorWritingForMoving":"","NSFileCoordinatorWritingForMerging":""}};