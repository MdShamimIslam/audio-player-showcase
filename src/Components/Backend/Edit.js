import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme from "../Common/theme/theme";
import { playerTypeOptions } from "../../utils/options";
import { produce } from "immer";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const { options:{playerSl} } = attributes;

  const blockProps = useBlockProps({ draggable: false });

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...blockProps}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        {playerSl &&
          <div className="bBlocksAudioPlayer">
            <Theme {...{ attributes }} />
          </div>
        }

        {!playerSl && <div className="theme-preview-grid">
          {playerTypeOptions.map((option) => (
            <div
              key={option.value}
              className="theme-preview-item"
              onClick={() => setAttributes(produce(attributes, draft => {
                draft.options.playerSl = option.value;
                draft.align = '';
              }))}
            >
              <div className="theme-preview-player">
                <div className="bBlocksAudioPlayer">
                  <Theme
                    attributes={{
                      ...attributes,
                      options: {
                        ...attributes.options,
                        playerSl: option.value,
                      },
                    }}
                  />
                </div>
                <p>{option.label}</p>
              </div>
            </div>
          ))}
        </div>}

      </div>
    </>
  );
};
export default Edit;
