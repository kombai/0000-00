ClassRef["NSFileVersion"] = {"[:]":"NSObject","[.]":{"conflict":{"abs":"A Boolean value indicating whether the contents of the version are in conflict with the contents of another version. (read-only)","dec":"@property (readonly, getter=isConflict) BOOL conflict"},"localizedName":{"abs":"The string containing the user-presentable name of the file version. (read-only)","dec":"@property(readonly) NSString *localizedName"},"localizedNameOfSavingComputer":{"abs":"The user-presentable name of the computer on which the revision was saved. (read-only)","dec":"@property (readonly) NSString *localizedNameOfSavingComputer"},"modificationDate":{"abs":"The modification date of the version. (read-only)","dec":"@property(readonly) NSDate *modificationDate"},"persistentIdentifier":{"abs":"The identifier for this version of the file. (read-only)","dec":"@property(readonly) id<NSCoding> persistentIdentifier"},"resolved":{"abs":"A Boolean value that indicates the version object is not in conflict (YES) or is in conflict (NO).","dec":"@property (getter=isResolved) BOOL resolved"},"URL":{"abs":"The URL identifying the location of the file associated with the file version object. (read-only)","dec":"@property(readonly) NSURL *URL"}},"[+]":{"currentVersionOfItemAtURL:":{"abs":"Returns the most recent version object for the file at the specified URL.","dec":"+ (NSFileVersion *)currentVersionOfItemAtURL:(NSURL *)url"},"otherVersionsOfItemAtURL:":{"abs":"Returns all versions of the specified file except the current version.","dec":"+ (NSArray *)otherVersionsOfItemAtURL:(NSURL *)url"},"removeOtherVersionsOfItemAtURL:error:":{"abs":"Removes all versions of a file, except the current one, from the version store.","dec":"+ (BOOL)removeOtherVersionsOfItemAtURL:(NSURL *)inFileURL error:(NSError **)outError"},"unresolvedConflictVersionsOfItemAtURL:":{"abs":"Returns an array of version objects that are currently in conflict for the specified URL.","dec":"+ (NSArray *)unresolvedConflictVersionsOfItemAtURL:(NSURL *)url"},"versionOfItemAtURL:forPersistentIdentifier:":{"abs":"Returns the version of the file that has the specified persistent ID.","dec":"+ (NSFileVersion *)versionOfItemAtURL:(NSURL *)url forPersistentIdentifier:(id)persistentIdentifier"}},"[-]":{"removeAndReturnError:":{"abs":"Remove this version object and its associated file from the version store.","dec":"- (BOOL)removeAndReturnError:(NSError **)outError"},"replaceItemAtURL:options:error:":{"abs":"Replace the contents of the specified file with the contents of the current version’s file.","dec":"- (NSURL *)replaceItemAtURL:(NSURL *)url options:(NSFileVersionReplacingOptions)options error:(NSError **)error"}},"[=]":{"NSFileVersionAddingByMoving":"","NSFileVersionReplacingByMoving":""}};