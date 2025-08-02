import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, PanelRow, TextControl, ToggleControl, RangeControl } from "@wordpress/components";
import { playerTypeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
import { Label, InlineDetailMediaUpload } from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { produce } from "immer";


const General = ({ attributes, setAttributes }) => {
  const { item, options, showcaseElements } = attributes;
  const { isForBack, isVolume, isCurrentTime, isDurationTime, isBadge, isHeart, isPlaybackSpeed, isRefresh } = showcaseElements || {};
  const { title, artist, audio = {}, cover = {}, skipTime } = item || {};
  const { playerSl } = options || {};
  

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Player Configuration", "audio-player-showcase")}
      >
        <SelectControl
          label={__("Select Player", "audio-player-showcase")}
          labelPosition="left"
          value={playerSl}
          options={playerTypeOptions}
          onChange={(val) => setAttributes(themeSwitch(val, attributes))}
          help={__("Some settings will be change when you will change the player.", "audio-player-showcase")}
        />

        <PanelRow>
          <Label className="">{__("Title:", "audio-player-showcase")}</Label>
          <TextControl
            value={title}
            onChange={(v) => setAttributes({ item: updateData(item, v, 'title') })}
          />
        </PanelRow>

        {playerSl !== "four" && <PanelRow>
          <Label className="">{__("Artist:", "audio-player-showcase")}</Label>
          <TextControl
            value={artist}
            onChange={(v) => setAttributes({ item: updateData(item, v, 'artist') })}
          />
        </PanelRow>}

        <Label>{__("Audio File:", "audio-player-showcase")}</Label>
        <InlineDetailMediaUpload
          types={["audio"]}
          value={audio}
          onChange={(v) => {
            setAttributes({
              item: produce(item, (draft) => {
                draft.audio = v;
                draft.title = v.title;
                draft.artist = v.meta.artist;
              })
            })
          }}
          placeholder={__("Enter Audio URL", "audio-player-showcase")}
          isMeta={true}
        />

        {["two", "seven", "thirteen", "fourteen", "fifteen"].includes(playerSl) && <>
          <Label>{__("Cover Photo:", "audio-player-showcase")}</Label>
          <InlineDetailMediaUpload
            types={["image"]}
            value={cover}
            onChange={(v) => setAttributes({ item: updateData(item, v, 'cover') })}
            placeholder={__("Enter Cover Image URL", "audio-player-showcase")}
          />
        </>
        }
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__("Elements", "audio-player-showcase")} >
        {!['six', 'eight', 'eleven'].includes(playerSl) && <>
          <ToggleControl
            className="mt10"
            checked={isForBack}
            label={__("Enable Forward/Backward", "audio-player-showcase")}
            onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isForBack") })
            }
          />
          {isForBack && <RangeControl
            className="mt15"
            label={__("Skip Time (seconds)", "audio-player-showcase")}
            labelPosition="left"
            value={skipTime}
            onChange={(val) => setAttributes({ item: updateData(item, val, "skipTime") })}
            min={1}
            max={60}
            step={1}
          />}
        </>
        }

        {!['seven', 'nine', 'twelve', 'fifteen'].includes(playerSl) && <ToggleControl
          className="mt10"
          checked={isVolume}
          label={__("Show/Hide Volume", "audio-player-showcase")}
          onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isVolume") })
          }
        />}

        <ToggleControl
          className="mt10"
          checked={isCurrentTime}
          label={__("Show Current Time", "audio-player-showcase")}
          onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isCurrentTime") })
          }
        />

        {!['two', 'five', 'seven'].includes(playerSl) && <ToggleControl
          className="mt10"
          checked={isDurationTime}
          label={__("Show Duration Time", "audio-player-showcase")}
          onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isDurationTime") })
          }
        />}

        {playerSl === "five" && <ToggleControl
          className="mt10"
          checked={isBadge}
          label={__("Show/Hide Badge", "audio-player-showcase")}
          onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isBadge") })
          }
        />}

        {playerSl === "six" && <>
          <ToggleControl
            className="mt10"
            checked={isHeart}
            label={__("Show/Hide Heart icon", "audio-player-showcase")}
            onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isHeart") })
            }
          />
          <ToggleControl
            className="mt10"
            checked={isPlaybackSpeed}
            label={__("Show/Hide Playback Speed", "audio-player-showcase")}
            onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isPlaybackSpeed") })
            }
          />
        </>}
        {playerSl === "eight" && <>
          <ToggleControl
            className="mt10"
            checked={isRefresh}
            label={__("Show/Hide Refresh icon", "audio-player-showcase")}
            onChange={(v) => setAttributes({ showcaseElements: updateData(showcaseElements, v, "isRefresh") })
            }
          />
        </>}

      </PanelBody>
    </>
  );
};

export default General;
