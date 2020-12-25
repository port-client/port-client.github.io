import { trigger, style, animate, transition, stagger, keyframes, query, state } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const AnimationGroup = [

    trigger(
      'opacityAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('300ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('0ms', style({opacity: 0}))
        ])
      ]
    ),
    trigger(
        'enterAnimation', [
          transition(':enter', [
            style({transform: 'translateX(100%)', opacity: 0}),
            animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
          ]),
          transition(':leave', [
            style({transform: 'translateX(0)', opacity: 1}),
            animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
          ])
        ]
    ),
    trigger(
        'leftEnterAnimation', [
          transition(':enter', [
            style({transform: 'translateX(-100%)', opacity: 0}),
            animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
          ]),
          transition(':leave', [
            style({transform: 'translateX(0)', opacity: 1}),
            animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
          ])
        ]
    ),
    trigger(
        'scaleAnimation', [
          transition(':enter', [
            style({transform: 'scale(0)', opacity: 0}),
            animate('300ms', style({transform: 'scale(1)', opacity: 1}))
          ]),
          transition(':leave', [
            style({transform: 'scale(1)', opacity: 1}),
            animate('300ms', style({transform: 'scale(0)', opacity: 0}))
          ])
        ]
    ),
    trigger(
        'dashFooterAnimation', [
            transition(':enter', [
              style({transform: 'translateY(70px)', opacity: 0}),
              animate('300ms', style({transform: 'translateY(0px)', opacity: 1}))
            ]),
            transition(':leave', [
              style({transform: 'translateX(0px)', opacity: 1}),
              animate('300ms', style({transform: 'translateY(70px)', opacity: 0}))
            ])
        ]
    ),
    trigger(
        'heightAnimation', [
            transition(':enter', [
              style({transform: 'scaleY(0)'}),
              animate('200ms', style({transform: 'scaleY(1)'}))
            ]),
            transition(':leave', [
              style({transform: 'scaleY(1)'}),
              animate('0ms', style({transform: 'scaleY(0)'}))
            ])
        ]
    ),
    trigger(
        'heightTopAnimation', [
            transition(':enter', [
              style({transform: 'scaleY(0)', transformOrigin: '50% 0%'}),
              animate('200ms', style({transform: 'scaleY(1)'}))
            ]),
            transition(':leave', [
              style({transform: 'scaleY(1)'}),
              animate('0ms', style({transform: 'scaleY(0)'}))
            ])
        ]
    ),
    trigger(
        'widthAnimation', [
            transition(':enter', [
              style({transform: 'scaleX(0)'}),
              animate('300ms', style({transform: 'scaleX(1)'}))
            ]),
            transition(':leave', [
              style({transform: 'scaleX(1)'}),
              animate('300ms', style({transform: 'scaleX(0)'}))
            ])
        ]
    )
];