ClassRef.UIScreen = {"[:]":"NSObject","[.]":{"applicationFrame":{"abs":"The frame rectangle for the app window. (read-only)","dec":"@property(nonatomic, readonly) CGRect applicationFrame"},"availableModes":{"abs":"The display modes that can be associated with the receiver. (read-only)","dec":"@property(nonatomic, readonly, copy) NSArray *availableModes"},"bounds":{"abs":"Contains the bounding rectangle of the screen, measured in points. (read-only)","dec":"@property(nonatomic, readonly) CGRect bounds"},"brightness":{"abs":"The brightness level of the screen.","dec":"@property(nonatomic) CGFloat brightness"},"currentMode":{"abs":"The current screen mode associated with the receiver.","dec":"@property(nonatomic, retain) UIScreenMode *currentMode"},"mirroredScreen":{"abs":"The screen being mirrored by an external display. (read-only)","dec":"@property(nonatomic, readonly, retain) UIScreen *mirroredScreen"},"overscanCompensation":{"abs":"For an external screen, this property sets the desired technique to compensate for overscan.","dec":"@property(nonatomic) UIScreenOverscanCompensation overscanCompensation"},"preferredMode":{"abs":"The preferred display mode for the receiver. (read-only)","dec":"@property(nonatomic, readonly, retain) UIScreenMode *preferredMode"},"scale":{"abs":"The natural scale factor associated with the screen. (read-only)","dec":"@property(nonatomic, readonly) CGFloat scale"},"wantsSoftwareDimming":{"abs":"A Boolean value that indicates whether the screen may be dimmed lower than the hardware is normally capable of by emulating it in software.","dec":"@property(nonatomic) BOOL wantsSoftwareDimming"}},"[+]":{"mainScreen":{"abs":"Returns the screen object representing the device’s screen.","dec":"+ (UIScreen *)mainScreen"},"screens":{"abs":"Returns an array containing all of the screens attached to the device.","dec":"+ (NSArray *)screens"}},"[-]":{"displayLinkWithTarget:selector:":{"abs":"Returns a display link object for the current screen.","dec":"- (CADisplayLink *)displayLinkWithTarget:(id)target selector:(SEL)sel"},"snapshotViewAfterScreenUpdates:":{"abs":"Returns a snapshot view based on the current screen contents.","dec":"- (UIView *)snapshotViewAfterScreenUpdates:(BOOL)afterUpdates"}},"[=]":{"UIScreenOverscanCompensationScale":"","UIScreenOverscanCompensationInsetBounds":"","UIScreenOverscanCompensationInsetApplicationFrame":""}};