ClassRef["NSURL"] = {"[:]":"NSObject","[+]":{"bookmarkDataWithContentsOfURL:error:":{"abs":"Initializes and returns bookmark data derived from an alias file pointed to by a specified URL.","dec":"+ (NSData *)bookmarkDataWithContentsOfURL:(NSURL *)bookmarkFileURL error:(NSError **)error"},"fileURLWithFileSystemRepresentation:isDirectory:relativeToURL:":{"abs":"Returns a new URL object initialized with a C string representing a local file system path.","dec":"+ (id)fileURLWithFileSystemRepresentation:(const char *)path isDirectory:(BOOL)isDir relativeToURL:(NSURL *)baseURL"},"fileURLWithPath:":{"abs":"Initializes and returns a newly created NSURL object as a file URL with a specified path.","dec":"+ (id)fileURLWithPath:(NSString *)path"},"fileURLWithPath:isDirectory:":{"abs":"Initializes and returns a newly created NSURL object as a file URL with a specified path.","dec":"+ (id)fileURLWithPath:(NSString *)path isDirectory:(BOOL)isDir"},"fileURLWithPathComponents:":{"abs":"Initializes and returns a newly created NSURL object as a file URL with specified path components.","dec":"+ (NSURL *)fileURLWithPathComponents:(NSArray *)components"},"resourceValuesForKeys:fromBookmarkData:":{"abs":"Returns the resource values for properties identified by a specified array of keys contained in specified bookmark data.","dec":"+ (NSDictionary *)resourceValuesForKeys:(NSArray *)keys fromBookmarkData:(NSData *)bookmarkData"},"URLByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error:":{"abs":"Returns a new URL made by resolving bookmark data.","dec":"+ (id)URLByResolvingBookmarkData:(NSData *)bookmarkData options:(NSURLBookmarkResolutionOptions)options relativeToURL:(NSURL *)relativeURL bookmarkDataIsStale:(BOOL *)isStale error:(NSError **)error"},"URLWithString:":{"abs":"Creates and returns an NSURL object initialized with a provided URL string.","dec":"+ (id)URLWithString:(NSString *)URLString"},"URLWithString:relativeToURL:":{"abs":"Creates and returns an NSURL object initialized with a base URL and a relative string.","dec":"+ (id)URLWithString:(NSString *)URLString relativeToURL:(NSURL *)baseURL"},"writeBookmarkData:toURL:options:error:":{"abs":"Creates an alias file on disk at a specified location with specified bookmark data.","dec":"+ (BOOL)writeBookmarkData:(NSData *)bookmarkData toURL:(NSURL *)bookmarkFileURL options:(NSURLBookmarkFileCreationOptions)options error:(NSError **)error"}},"[-]":{"absoluteString":{"abs":"Returns the URL string for the receiver as if it were an absolute URL.","dec":"- (NSString *)absoluteString"},"absoluteURL":{"abs":"Returns an absolute URL that refers to the same resource as the receiver.","dec":"- (NSURL *)absoluteURL"},"baseURL":{"abs":"Returns the base URL of the receiver.","dec":"- (NSURL *)baseURL"},"bookmarkDataWithOptions:includingResourceValuesForKeys:relativeToURL:error:":{"abs":"Returns a bookmark for the URL, created with specified options and resource values.","dec":"- (NSData *)bookmarkDataWithOptions:(NSURLBookmarkCreationOptions)options includingResourceValuesForKeys:(NSArray *)keys relativeToURL:(NSURL *)relativeURL error:(NSError **)error"},"checkResourceIsReachableAndReturnError:":{"abs":"Returns whether the resource pointed to by a file URL can be reached.","dec":"- (BOOL)checkResourceIsReachableAndReturnError:(NSError **)error"},"filePathURL":{"abs":"Returns a new file path URL that points to the same resource as the original URL.","dec":"- (NSURL *)filePathURL"},"fileReferenceURL":{"abs":"Returns a new file reference URL that points to the same resource as the original URL.","dec":"- (NSURL *)fileReferenceURL"},"fileSystemRepresentation":{"abs":"Returns a C string containing the file system path for a file URL.","dec":"- (const char *)fileSystemRepresentation"},"fragment":{"abs":"Returns the fragment of a URL conforming to RFC 1808.","dec":"- (NSString *)fragment"},"getFileSystemRepresentation:maxLength:":{"abs":"Fills the provided buffer with a C string representing a local file system path.","dec":"- (BOOL)getFileSystemRepresentation:(char *)buffer maxLength:(NSUInteger)maxBufferLength"},"getResourceValue:forKey:error:":{"abs":"Returns the value of the resource property for the specified key.","dec":"- (BOOL)getResourceValue:(out id *)value forKey:(NSString *)key error:(out NSError **)error"},"host":{"abs":"Returns the host of a URL conforming to RFC 1808.","dec":"- (NSString *)host"},"initByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error:":{"abs":"Initializes a newly created NSURL that points to a location specified by resolving bookmark data.","dec":"- (id)initByResolvingBookmarkData:(NSData *)bookmarkData options:(NSURLBookmarkResolutionOptions)options relativeToURL:(NSURL *)relativeURL bookmarkDataIsStale:(BOOL *)isStale error:(NSError **)error"},"initFileURLWithFileSystemRepresentation:isDirectory:relativeToURL:":{"abs":"Initializes a URL object with a C string representing a local file system path.","dec":"- (id)initFileURLWithFileSystemRepresentation:(const char *)path isDirectory:(BOOL)isDir relativeToURL:(NSURL *)baseURL"},"initFileURLWithPath:":{"abs":"Initializes a newly created NSURL referencing the local file or directory at path.","dec":"- (id)initFileURLWithPath:(NSString *)path"},"initFileURLWithPath:isDirectory:":{"abs":"Initializes a newly created NSURL referencing the local file or directory at path.","dec":"- (id)initFileURLWithPath:(NSString *)path isDirectory:(BOOL)isDir"},"initWithScheme:host:path:":{"abs":"Initializes a newly created NSURL with a specified scheme, host, and path.","dec":"- (id)initWithScheme:(NSString *)scheme host:(NSString *)host path:(NSString *)path"},"initWithString:":{"abs":"Initializes an NSURL object with a provided URL string.","dec":"- (id)initWithString:(NSString *)URLString"},"initWithString:relativeToURL:":{"abs":"Initializes an NSURL object with a base URL and a relative string.","dec":"- (id)initWithString:(NSString *)URLString relativeToURL:(NSURL *)baseURL"},"isEqual:":{"abs":"Returns a Boolean value that indicates whether the receiver and a given object have identical URL strings and base URLs.","dec":"- (BOOL)isEqual:(id)anObject"},"isFileReferenceURL":{"abs":"Returns whether the URL is a file reference URL.","dec":"- (BOOL)isFileReferenceURL"},"isFileURL":{"abs":"Returns whether the receiver uses the file scheme.","dec":"- (BOOL)isFileURL"},"lastPathComponent":{"abs":"Returns the last path component of a file URL.","dec":"- (NSString *)lastPathComponent"},"parameterString":{"abs":"Returns the parameter string of a URL conforming to RFC 1808.","dec":"- (NSString *)parameterString"},"password":{"abs":"Returns the password of a URL conforming to RFC 1808.","dec":"- (NSString *)password"},"path":{"abs":"Returns the path of a URL conforming to RFC 1808.","dec":"- (NSString *)path"},"pathComponents":{"abs":"Returns the individual path components of a file URL in an array.","dec":"- (NSArray *)pathComponents"},"pathExtension":{"abs":"Returns the path extension of a file URL.","dec":"- (NSString *)pathExtension"},"port":{"abs":"Returns the port number of a URL conforming to RFC 1808.","dec":"- (NSNumber *)port"},"query":{"abs":"Returns the query string from a URL conforming to RFC 1808.","dec":"- (NSString *)query"},"relativePath":{"abs":"Returns the path of a URL conforming to RFC 1808, without resolving against the receiver’s base URL.","dec":"- (NSString *)relativePath"},"relativeString":{"abs":"Returns a string representation of the relative portion of the URL.","dec":"- (NSString *)relativeString"},"removeAllCachedResourceValues":{"abs":"Removes all cached resource values and temporary resource values from the URL object.","dec":"- (void)removeAllCachedResourceValues"},"removeCachedResourceValueForKey:":{"abs":"Removes the cached resource value identified by a given resource value key from the URL object.","dec":"- (void)removeCachedResourceValueForKey:(NSString *)key"},"resourceSpecifier":{"abs":"Returns the resource specifier of the URL.","dec":"- (NSString *)resourceSpecifier"},"resourceValuesForKeys:error:":{"abs":"Returns the resource values for the properties identified by specified array of keys.","dec":"- (NSDictionary *)resourceValuesForKeys:(NSArray *)keys error:(NSError **)error"},"scheme":{"abs":"Returns the scheme of the URL.","dec":"- (NSString *)scheme"},"setResourceValue:forKey:error:":{"abs":"Sets the resource property of the URL specified by a given key to a given value.","dec":"- (BOOL)setResourceValue:(id)value forKey:(NSString *)key error:(NSError **)error"},"setResourceValues:error:":{"abs":"Sets resource properties of the URL specified by a given set of keys to a given set of values.","dec":"- (BOOL)setResourceValues:(NSDictionary *)keyedValues error:(NSError **)error"},"setTemporaryResourceValue:forKey:":{"abs":"Sets a temporary resource value on the URL object.","dec":"- (void)setTemporaryResourceValue:(id)value forKey:(NSString *)key"},"standardizedURL":{"abs":"Returns a new NSURL object with any instances of \"..\" or \".\" removed from its path.","dec":"- (NSURL *)standardizedURL"},"URLByAppendingPathComponent:":{"abs":"Returns a new URL made by appending a path component to the original URL.","dec":"- (NSURL *)URLByAppendingPathComponent:(NSString *)pathComponent"},"URLByAppendingPathComponent:isDirectory:":{"abs":"Returns a new URL made by appending a path component to the original URL, along with a trailing slash if the component is designated a directory.","dec":"- (NSURL *)URLByAppendingPathComponent:(NSString *)pathComponentisDirectory isDirectory:(BOOL)isDirectory"},"URLByAppendingPathExtension:":{"abs":"Returns a new URL made by appending a path extension to the original URL.","dec":"- (NSURL *)URLByAppendingPathExtension:(NSString *)pathExtension"},"URLByDeletingLastPathComponent":{"abs":"Returns a new URL made by deleting the last path component from the original URL.","dec":"- (NSURL *)URLByDeletingLastPathComponent"},"URLByDeletingPathExtension":{"abs":"Returns a new URL made by deleting the path extension, if any, from the original URL.","dec":"- (NSURL *)URLByDeletingPathExtension"},"URLByResolvingSymlinksInPath":{"abs":"Returns a new URL that points to the same resource as the original URL and includes no symbolic links.","dec":"- (NSURL *)URLByResolvingSymlinksInPath"},"URLByStandardizingPath":{"abs":"Returns a new URL that points to the same resource as the original URL and is an absolute path.","dec":"- (NSURL *)URLByStandardizingPath"},"user":{"abs":"Returns the user portion of a URL conforming to RFC 1808.","dec":"- (NSString *)user"}},"[=]":{"NSURLFileScheme":"","NSURLAttributeModificationDateKey":"","NSURLContentAccessDateKey":"","NSURLContentModificationDateKey":"","NSURLCreationDateKey":"","NSURLCustomIconKey":"","NSURLEffectiveIconKey":"","NSURLFileResourceIdentifierKey":"","NSURLFileResourceTypeKey":"","NSURLFileSecurityKey":"","NSURLHasHiddenExtensionKey":"","NSURLIsDirectoryKey":"","NSURLIsExcludedFromBackupKey":"","NSURLIsExecutableKey":"","NSURLIsHiddenKey":"","NSURLIsMountTriggerKey":"","NSURLIsPackageKey":"","NSURLIsReadableKey":"","NSURLIsRegularFileKey":"","NSURLIsSymbolicLinkKey":"","NSURLIsSystemImmutableKey":"","NSURLIsUserImmutableKey":"","NSURLIsVolumeKey":"","NSURLIsWritableKey":"","NSURLLabelColorKey":"","NSURLLabelNumberKey":"","NSURLLinkCountKey":"","NSURLLocalizedLabelKey":"","NSURLLocalizedNameKey":"","NSURLLocalizedTypeDescriptionKey":"","NSURLNameKey":"","NSURLParentDirectoryURLKey":"","NSURLPathKey":"","NSURLPreferredIOBlockSizeKey":"","NSURLTypeIdentifierKey":"","NSURLVolumeIdentifierKey":"","NSURLVolumeURLKey":"","NSURLFileResourceTypeNamedPipe":"","NSURLFileResourceTypeCharacterSpecial":"","NSURLFileResourceTypeDirectory":"","NSURLFileResourceTypeBlockSpecial":"","NSURLFileResourceTypeRegular":"","NSURLFileResourceTypeSymbolicLink":"","NSURLFileResourceTypeSocket":"","NSURLFileResourceTypeUnknown":"","NSURLFileSizeKey":"","NSURLFileAllocatedSizeKey":"","NSURLTotalFileSizeKey":"","NSURLTotalFileAllocatedSizeKey":"","NSURLIsAliasFileKey":"","NSURLVolumeLocalizedFormatDescriptionKey":"","NSURLVolumeTotalCapacityKey":"","NSURLVolumeAvailableCapacityKey":"","NSURLVolumeResourceCountKey":"","NSURLVolumeSupportsPersistentIDsKey":"","NSURLVolumeSupportsSymbolicLinksKey":"","NSURLVolumeSupportsHardLinksKey":"","NSURLVolumeSupportsJournalingKey":"","NSURLVolumeIsJournalingKey":"","NSURLVolumeSupportsSparseFilesKey":"","NSURLVolumeSupportsZeroRunsKey":"","NSURLVolumeSupportsCaseSensitiveNamesKey":"","NSURLVolumeSupportsCasePreservedNamesKey":"","NSURLVolumeSupportsRootDirectoryDatesKey":"","NSURLVolumeSupportsVolumeSizesKey":"","NSURLVolumeSupportsRenamingKey":"","NSURLVolumeSupportsAdvisoryFileLockingKey":"","NSURLVolumeSupportsExtendedSecurityKey":"","NSURLVolumeIsBrowsableKey":"","NSURLVolumeMaximumFileSizeKey":"","NSURLVolumeIsEjectableKey":"","NSURLVolumeIsRemovableKey":"","NSURLVolumeIsInternalKey":"","NSURLVolumeIsAutomountedKey":"","NSURLVolumeIsLocalKey":"","NSURLVolumeIsReadOnlyKey":"","NSURLVolumeCreationDateKey":"","NSURLVolumeURLForRemountingKey":"","NSURLVolumeUUIDStringKey":"","NSURLVolumeNameKey":"","NSURLVolumeLocalizedNameKey":"","NSURLBookmarkCreationPreferFileIDResolution":"","NSURLBookmarkCreationMinimalBookmark":"","NSURLBookmarkCreationSuitableForBookmarkFile":"","NSURLBookmarkResolutionWithoutUI":"","NSURLBookmarkResolutionWithoutMounting":"","NSURLKeysOfUnsetValuesKey":"","NSURLIsUbiquitousItemKey":"","NSURLUbiquitousItemDownloadingErrorKey":"","NSURLUbiquitousItemDownloadingStatusKey":"","NSURLUbiquitousItemHasUnresolvedConflictsKey":"","NSURLUbiquitousItemIsDownloadedKey":"","NSURLUbiquitousItemIsDownloadingKey":"","NSURLUbiquitousItemIsUploadedKey":"","NSURLUbiquitousItemIsUploadingKey":"","NSURLUbiquitousItemPercentDownloadedKey":"","NSURLUbiquitousItemPercentUploadedKey":"","NSURLUbiquitousItemUploadingErrorKey":"","NSURLUbiquitousItemDownloadingStatusCurrent":"","NSURLUbiquitousItemDownloadingStatusDownloaded":"","NSURLUbiquitousItemDownloadingStatusNotDownloaded":""}};